import {Parser} from 'html-to-react';
import {formatTimeString} from '../utils/formatTimeString';

const HTMLParser = new Parser();

class Message {
    constructor() {
        this.id = null;
        this.author = null;
        this.message = null;
        this.dateString = null;
        this.timestamp = null;

        return {
            fromDTO: this.fromDTO,
            getMessage: this,
        }
    }

    fromDTO = ({_id, author, message, timestamp}) => {
        this.id = _id;
        this.author = author;
        this.message = HTMLParser.parse(message);
        this.dateString = formatTimeString(+timestamp);
        this.timestamp = +timestamp;

        return this;
    }
}

export default Message;
