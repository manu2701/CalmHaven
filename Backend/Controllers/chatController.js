const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require('../config');

console.log('Initializing chat controller with API key:', config.GEMINI_API_KEY.substring(0, 10) + '...');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

// Get the model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// List of PTSD and mental health-related keywords
const relevantKeywords = [
    'ptsd', 'trauma', 'anxiety', 'stress', 'depression', 'mental health',
    'flashback', 'nightmare', 'panic', 'therapy', 'counseling', 'trigger',
    'coping', 'support', 'help', 'fear', 'emotion', 'feeling', 'mood',
    'sleep', 'insomnia', 'memory', 'treatment', 'symptom', 'diagnosis',
    'recovery', 'healing', 'grounding', 'meditation', 'mindfulness',
    'veteran', 'abuse', 'accident', 'assault', 'violence', 'grief',
    'calm', 'relax', 'breathe', 'exercise', 'self-care', 'support group',
    // Adding more emotional states and feelings
    'scared', 'afraid', 'worried', 'nervous', 'upset', 'distressed',
    'overwhelmed', 'sad', 'lonely', 'angry', 'hurt', 'confused',
    'hopeless', 'helpless', 'tired', 'exhausted', 'frightened',
    'troubled', 'uneasy', 'restless', 'tense', 'uncomfortable'
];

// Function to check if message is relevant to PTSD or mental health
function isRelevantTopic(message) {
    const lowercaseMsg = message.toLowerCase();
    // Check for emotional expressions with "I am" or "I'm"
    if (/\b(i'?m|i\s+am)\s+(feeling\s+)?(scared|afraid|worried|nervous|upset|distressed|overwhelmed|sad|lonely|angry|hurt|confused|hopeless|helpless|tired|exhausted|frightened|troubled|uneasy|restless|tense|uncomfortable)\b/i.test(lowercaseMsg)) {
        return true;
    }
    return relevantKeywords.some(keyword => lowercaseMsg.includes(keyword)) ||
           // Also check for general greetings or how are you type messages
           /^(hi|hello|hey|good (morning|evening|afternoon)|how are you)/.test(lowercaseMsg);
}

const chatController = {
    async chat(req, res) {
        try {
            console.log('Received chat request:', req.body);
            const { message } = req.body;
            
            if (!message) {
                console.log('No message provided');
                return res.status(400).json({ error: 'Message is required' });
            }

            // Check if the message is relevant to PTSD or mental health
            if (!isRelevantTopic(message)) {
                return res.json({
                    response: "I apologize, but I'm specifically trained to help with PTSD and mental health-related topics. While I'd love to help, I can't provide information about other subjects. Please feel free to ask me about PTSD, anxiety, coping strategies, or any mental health concerns you'd like to discuss."
                });
            }

            try {
                console.log('Preparing to send message to Gemini API:', message);

                // Prepare prompt with better context awareness and formatting instructions
                const prompt = `You are CalmHaven's AI assistant, specifically trained for PTSD and mental health support. 

Current user message: "${message}"

Respond in a natural, conversational way following these guidelines:
1. Focus ONLY on PTSD and mental health-related topics
2. Speak directly without any prefixes like "Response:" or "Answer:"
3. Keep responses concise and focused
4. Use a warm, empathetic tone
5. If the user shows signs of distress:
   - Acknowledge their feelings
   - Offer immediate comfort
   - Suggest simple grounding techniques
6. For mental health questions:
   - Provide clear, evidence-based information
   - Stay supportive and friendly
   - Encourage professional help when appropriate
7. Avoid clinical or overly formal language
8. Never start with "As an AI assistant" or similar phrases

Important: If the topic strays from PTSD or mental health, politely redirect the conversation back to these areas.

Remember: Write your response as if you're having a natural conversation, without any formatting or labels.`;

                console.log('Sending request to Gemini API with prompt length:', prompt.length);

                // Generate content
                const result = await model.generateContent(prompt);
                console.log('Received response from Gemini API');

                let response = result.response.text();
                
                // Clean up the response
                response = response
                    .replace(/^(Response:|Answer:|AI:|Assistant:)/i, '')  // Remove common prefixes
                    .replace(/^As an AI assistant,?/i, '')  // Remove AI self-references
                    .trim();  // Remove extra whitespace

                console.log('Generated response length:', response.length);

                res.json({ response });
            } catch (error) {
                console.error('Gemini API error details:', {
                    name: error.name,
                    message: error.message,
                    stack: error.stack,
                    status: error.status,
                });
                
                if (error.message?.includes('rate limit exceeded')) {
                    return res.status(429).json({ 
                        error: "I'm currently experiencing high demand. Please try again in a few moments.",
                        retryAfter: 3600
                    });
                }

                if (error.message?.includes('API key')) {
                    return res.status(401).json({
                        error: "There's an issue with the API configuration. Please try again later."
                    });
                }

                throw error;
            }
        } catch (error) {
            console.error('Chatbot error:', {
                name: error.name,
                message: error.message,
                stack: error.stack
            });
            
            res.status(500).json({ 
                error: "I apologize, but I'm having trouble responding right now. Please try again later.",
                details: error.message
            });
        }
    }
};

module.exports = chatController;
