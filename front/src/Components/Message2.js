function Message2({message}) {
    
    let title = message.name;
    let text = message.text
    

    return (
        <div >
            <strong>{title}</strong>
            <br/>
            {text}
        </div>
    );
}

export default Message2;
