import { useState } from 'react';

function ChatMessages() {
    
     const [username, setUsername] = useState('');
     const [message, setMessage] = useState('');
 
     const [messages, setMessages] = useState([]);
 
     const handleUsernameChange = (event) => setUsername(event.target.value);
     const handleMessagenChange = (event) => setMessage(event.target.value);

     const addNewMessage = () => {

         const newMessage = {
             username: username,
             message: message,
             createdAt: new Date()
         };
 
         const updatedMessages = [...messages, newMessage];
         setMessages(updatedMessages);
         setMessage('');

        
     };

    const messagesElements = messages.map((message) => {
        
        return (
            <div>
                <strong className="form-group">{message.username} {message.createdAt.toLocaleDateString('en-US')}</strong>
                <br />
                <p>{message.message}</p>
            </div>
        );
    })

    return (
        <div className="container mt-4 mb-5">
            <div>
                <div>
                    <div className="col border chat">
                        <div>
                            {messagesElements}
                        </div>
                    </div>
                </div>
                <div htmlFor="user-title" className="form-group mt-3">
                    <label htmlFor="user">Username</label>
                    <div className="p-0 col-3">
                        <input value={username} onChange={handleUsernameChange} type="text" className="form-control" id="user"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="chat-message">Message</label>
                    <div className="row">
                        <div className="col-6">
                            <textarea value={message} onChange={handleMessagenChange} id="chat-message" className="form-control"></textarea>
                        </div>
                        <div className="col-2">
                            <button onClick={addNewMessage} className="btn btn-dark">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatMessages;
