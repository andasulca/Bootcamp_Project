import { useState } from 'react';

function Chat() {
    const [tasks, setTasks] = useState(['']);
    const [newTaskName, setNewTaskName] = useState('');
    const addTask = () => {
        const newTasks = [newTaskName, ...tasks]
        setTasks(newTasks);
        setNewTaskName('');
    }
    const listElements = tasks.map((task, index) => <p key={index}>{task}</p>);

    return (
        <div className="container mt-2">
            <div className="col">
                <div className="overflow-auto border" style={{height: 300}}>
                        <ul>{listElements}</ul>
                </div>
                <div className="form-group text-left">
                    <label for="chat-username">Username</label>
                    <div>
                        <input value={newTaskName} onChange={(event) => {setNewTaskName(event.target.value)}} />
                    </div>
                </div>
                <div className="text-left">
                    <label for="chat-message">Message</label>
                    <div className="row">
                        <div className="col-8">
                            <textarea className="form-control" rows="2"></textarea>
                        </div>
                        <div>
                            <button onClick={addTask}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Chat;