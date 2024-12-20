const Todo = require('../Models/Todo');
const Survey = require('../Models/Survey');

// Helper function to generate todos based on metrics
const generateTodosFromMetrics = (metrics) => {
    const todos = [];
    const today = new Date();

    // High stress level todos
    if (metrics.stressLevel > 7) {
        todos.push({
            title: 'Take a 10-minute meditation break',
            description: 'Find a quiet place and practice deep breathing',
            category: 'meditation',
            priority: 'high',
            dueDate: new Date(today.setHours(today.getHours() + 2))
        });
        todos.push({
            title: 'Go for a short walk',
            description: 'A 15-minute walk can help reduce stress',
            category: 'exercise',
            priority: 'medium',
            dueDate: new Date(today.setHours(today.getHours() + 4))
        });
    }

    // Poor sleep quality todos
    if (metrics.sleepQuality < 5) {
        todos.push({
            title: 'Improve Sleep Quality',
            description: 'Avoid screens 1 hour before bed and create a relaxing bedtime routine',
            category: 'wellness',
            priority: 'high',
            dueDate: new Date(today.setHours(20, 0, 0, 0))
        });
    }

    // If user has triggers
    if (metrics.hasTriggers) {
        todos.push({
            title: 'Practice Grounding Techniques',
            description: '5-4-3-2-1 method: Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste',
            category: 'wellness',
            priority: 'high',
            dueDate: new Date(today.setHours(today.getHours() + 1))
        });
    }

    // If user needs support
    if (metrics.needsSupport) {
        todos.push({
            title: 'Reach Out for Support',
            description: 'Contact a trusted friend, family member, or mental health professional',
            category: 'social',
            priority: 'high',
            dueDate: new Date(today.setHours(today.getHours() + 3))
        });
    }

    // Add default wellness todos
    todos.push({
        title: 'Stay Hydrated',
        description: 'Drink water regularly throughout the day',
        category: 'wellness',
        priority: 'medium',
        dueDate: new Date(today.setHours(today.getHours() + 2))
    });

    todos.push({
        title: 'Take Deep Breaths',
        description: 'Practice deep breathing for 2 minutes',
        category: 'wellness',
        priority: 'medium',
        dueDate: new Date(today.setHours(today.getHours() + 5))
    });

    return todos;
};

const generateTodosForWeek = async (req, res) => {
    try {
        console.log('Generating todos for user:', req.user._id);
        const { stressLevel, sleepQuality, hasTriggers, needsSupport, answers } = req.body;

        // Save survey metrics
        const survey = new Survey({
            userId: req.user._id,
            metrics: {
                stressLevel,
                sleepQuality,
                hasTriggers,
                needsSupport
            },
            answers
        });
        await survey.save();
        console.log('Survey saved:', survey._id);

        // Generate todos based on metrics
        const todoTemplates = generateTodosFromMetrics({ 
            stressLevel, 
            sleepQuality, 
            hasTriggers, 
            needsSupport 
        });
        
        // Delete existing incomplete todos
        await Todo.deleteMany({ 
            userId: req.user._id,
            completed: false
        });

        // Save new todos
        const savedTodos = await Promise.all(
            todoTemplates.map(todo => {
                const newTodo = new Todo({
                    ...todo,
                    userId: req.user._id
                });
                return newTodo.save();
            })
        );
        console.log('Generated todos:', savedTodos.length);

        res.status(201).json(savedTodos);
    } catch (error) {
        console.error('Error generating todos:', error);
        res.status(500).json({ error: 'Error generating todos' });
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ 
            userId: req.user._id,
            completed: false
        }).sort({ priority: -1, dueDate: 1 });
        
        res.json(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Error fetching todos' });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;

        const todo = await Todo.findOneAndUpdate(
            { _id: id, userId: req.user._id },
            update,
            { new: true }
        );

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.json(todo);
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Error updating todo' });
    }
};

module.exports = {
    generateTodosForWeek,
    getTodos,
    updateTodo
};
