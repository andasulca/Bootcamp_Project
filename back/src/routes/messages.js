import express from 'express';
import MessageChat from '../models/MessageChat.js'

const router = express.Router();

router.get('/chat', async (req, res) => {
    try {
        const query = MessageChat.find({});
        const messages = await query.exec();
        res.json(messages);    
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

router.post('/chat', async (req, res) => {
    const messageText = new MessageChat({
        name: req.body.name,
        text: req.body.text,
    });

    try {
        const data = await messageText.save();
        res.json(data);    
    } catch(err) {
        res.json({message: err});
    }
});

export default router;