
function Chat() {
    return (
        <div>
            <div className="container mt-2">
                <div className="col">
                    <div className="overflow-auto border" id="chatContainer">
                        <div id="chat-content">
                        </div>
                    </div>
                    <div>
                        <form id="chat-form">
                            <div className="form-group text-left">
                                <label for="chat-username">Username</label>
                                <div>
                                <input type="text" class="form-control col-3" id="chat-username" value="" />
                                </div>
                            </div>
                            <div className="form-group text-left">
                                <label for="chat-message">Message</label>
                                <div className="row">
                                <div className="col-8">
                                    <textarea className="form-control" id="chat-message" rows="2"></textarea>
                                </div>
                                <div>
                                    <input type="submit" value="Send" />
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Chat;