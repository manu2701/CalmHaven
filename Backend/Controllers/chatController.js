const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require('../config');

console.log('Initializing chat controller with API key:', config.GEMINI_API_KEY.substring(0, 10) + '...');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

// Get the model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const chatController = {
    async chat(req, res) {
        try {
            console.log('Received chat request:', req.body);
            const { message } = req.body;
            
            if (!message) {
                console.log('No message provided');
                return res.status(400).json({ error: 'Message is required' });
            }

            try {
                console.log('Preparing to send message to Gemini API:', message);

                // Prepare prompt with better context awareness
                const prompt = `You are CalmHaven's AI assistant, designed to help users with PTSD and general mental health support. 
                
Current user message: "${message}"

Analyze the message and respond appropriately:
1. If the message indicates distress, anxiety, or PTSD symptoms:
   - Acknowledge their feelings
   - Offer immediate comfort
   - Suggest a simple grounding technique
   - Provide gentle encouragement

2. If it's a general question or conversation:
   - Respond naturally and helpfully
   - Stay supportive and friendly
   - Provide relevant information if asked
   - Maintain a calm and understanding tone

3. If you're unsure about personal information or specific details:
   - Politely explain that you're a supportive AI assistant
   - Focus on being helpful within your role

Keep responses concise, clear, and appropriate to the context of the question.`;

                console.log('Sending request to Gemini API with prompt length:', prompt.length);

                // Generate content
                const result = await model.generateContent(prompt);
                console.log('Received response from Gemini API');

                const response = result.response.text();
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
