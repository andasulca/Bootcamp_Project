import * as moment from 'moment'

function Message2({message}) {
    
    let name = message.name;
    let text = message.text
    let date = moment(message.createdAt).format('LLLL');
    
    

    return (
        <div className="col pb-1">
            <div className="row">
                <strong>{name}</strong> {date}
            </div>
            <div className="row">
                {text}
            </div>

        </div>
    );
}

export default Message2;
