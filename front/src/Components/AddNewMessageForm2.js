import { useState } from 'react';
import AxiosPost from '../Requests/AxiosPost';

function AddNewMessageForm2() {

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleNameChange = (event) => setName(event.target.value);
    const handleTextChange = (event) => setText(event.target.value);

    const addNewMessage = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if (name === '') {
            errorsForForm.push('Please enter a name');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return ;
        }

        await AxiosPost('chat', {
            name,
            text
        });
        setLoading(false);
        setName('');
        setText('');
    };


    // template stuff
    const saveButtonText = loading ? 'Loading...' : 'Add task';
    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div className="alert alert-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }

    return (
        <div>
            {errorsElement}
            <div className="form-group">
                <label htmlFor="new-task-name">Name</label>
                <input value={name} onChange={handleNameChange} disabled={loading} type="text" className="form-control" id="new-task-name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="new-task-text">Text</label>
                <textarea value={text} onChange={handleTextChange} disabled={loading} id="new-task-text" className="form-control"></textarea>
            </div>
            <div className="form-group">
                <button onClick={addNewMessage} disabled={loading} className="btn btn-dark">{saveButtonText}</button>
            </div>
        </div>
    );
}

export default AddNewMessageForm2;