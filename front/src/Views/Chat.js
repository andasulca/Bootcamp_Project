import { useState } from 'react';

function Chat() {
    const [messages, setMessages] = useState(['']);
    const [name, setName] = useState(['']);
    const [text, setText] = useState(['']);
   
    const addMessages = () => {
        const newMessages = [...messages, {
            name: name,
            name: text,
        }]
        setMessages(newMessages)
        setName('')
        setText('')
    }

    const listElements = messages.map((message, index) => <p key={index}>{message}</p>);

    console.log(listElements)
    console.log(name)
    console.log(text)

    return (
        <div className="container mt-2">
            <div className="col">
                <div className="overflow-auto border" style={{height: 300}}>
                        //
                </div>
                <div className="form-group text-left">
                    <label for="chat-username">Username</label>
                    <div>
                        <input name="name" value={name} onChange={(event) => {setName(event.target.value)}} />
                    </div>
                </div>
                <div className="text-left">
                    <label for="chat-message">Message</label>
                    <div className="row">
                        <div className="col-8">
                            <textarea className="form-control" rows="2" name="text" value={text} onChange={(event) => {setText(event.target.value)}}></textarea>
                        </div>
                        <div>
                            <button onClick={addMessages}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}



export default Chat;

// import { useState } from 'react';

// function Chat() {
//     const [tasks, setTasks] = useState(['']);
//     const [newTaskName, setNewTaskName] = useState('');
//     const addTask = () => {
//         const newTasks = [newTaskName, ...tasks]
//         setTasks(newTasks);
//         setNewTaskName('');
//     }
//     const listElements = tasks.map((task, index) => <p key={index}>{task}</p>);

//     return (
//         <div className="container mt-2">
//             <div className="col">
//                 <div className="overflow-auto border" style={{height: 300}}>
//                         <ul>{listElements}</ul>
//                 </div>
//                 <div className="form-group text-left">
//                     <label for="chat-username">Username</label>
//                     <div>
//                         <input value={newTaskName} onChange={(event) => {setNewTaskName(event.target.value)}} />
//                     </div>
//                 </div>
//                 <div className="text-left">
//                     <label for="chat-message">Message</label>
//                     <div className="row">
//                         <div className="col-8">
//                             <textarea className="form-control" rows="2"></textarea>
//                         </div>
//                         <div>
//                             <button onClick={addTask}>Send message</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ); 
// }

// export default Chat;