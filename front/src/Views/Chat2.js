import AddNewMessageForm2 from "../Components/AddNewMessageForm2";
import Messages2 from "../Components/Messages2";

function Chat2() {
    return (
        <div className="pt-2">
            <div className="col border chat">
            <Messages2 />
            </div>
            <AddNewMessageForm2 />
        </div>
    )
}

export default Chat2;