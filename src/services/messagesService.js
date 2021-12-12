import MessagesClient from './MessagesClient';
import config from '../config';

const messagesService = new MessagesClient({
    serviceUrl: config.MESSAGE_SERVICE_URL,
    accessToken: config.ACCESS_TOKEN,
});

export default messagesService;
