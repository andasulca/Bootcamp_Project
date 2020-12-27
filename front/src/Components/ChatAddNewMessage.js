import { useState } from 'react';
import AxiosPost from '../Requests/AxiosPost';

function ChatAddNewMessage() {
    // internal state
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    // internal events
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const addNewTask = async () => {
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
            description
        });
        setLoading(false);
        setName('');
        setDescription('');
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
            
        </div>

    );
}

export default ChatAddNewMessage;