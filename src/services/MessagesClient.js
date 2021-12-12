import qs from 'qs';

export default class MessagesClient {
    constructor({serviceUrl, accessToken}) {
        this.serviceUrl = serviceUrl;
        this.accessToken = accessToken;

        return {
            getMessages: this.getMessages,
            addMessage: this.addMessage,
        }
    }

    getMessages = params => {
        const {timestamp, limit} = params;
        const query = {
            token: this.accessToken,
            ...(timestamp && {since: timestamp}),
            ...(limit && {limit}),
        };
        const queryString = qs.stringify(query);

        return fetch(`${this.serviceUrl}?${queryString}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'GET',
        })
    };

    addMessage = params => {
        return fetch(this.serviceUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                token: this.accessToken,
            },
            method: 'POST',
            body: JSON.stringify(params),
        })
    }

}


