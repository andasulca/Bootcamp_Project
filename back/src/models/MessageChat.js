import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const messageChat = mongoose.model('Messages', MessageSchema);

export default messageChat;