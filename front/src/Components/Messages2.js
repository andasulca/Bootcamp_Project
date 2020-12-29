import Message2 from './Message2';
import useAxiosGet from '../Hooks/useAxiosGet';

function Messages2() {
    const messages = useAxiosGet('chat');
    console.log(messages)

    let content = '';

    if (messages.loading) {
        content = <h4>Loading...</h4>
    } else if (messages.data.length === 0) {
        content = <h4>No messages! Yay!</h4>
    } else {
        content = (
            <ul className="list-group">
                {messages.data.map((message) => <Message2 key={message._id} message={message} />)}
            </ul>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default Messages2;