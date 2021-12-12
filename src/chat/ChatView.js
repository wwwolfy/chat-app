import React, {useState, useEffect} from 'react';
import {InputButtonContainer, Input, Button, Container, Message} from '../ui-components';
import messagesService from '../services/messagesService';
import {formatTimeString} from './utils/formatTimeString';
import './ChatView.scss';

const userName = 'Slobodan';

const ChatView = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        messagesService.getMessages({timestamp: null, limit: null})
            .then(res => res.json())
            .then(res => {
                setMessages(res);
                window.scrollTo(0, document.body.scrollHeight);
            })
            .catch(err => console.error(err));
    }, []);

    const sendMessage = () => {
        if (!message || !message.trim().length > 0) return;
        setIsLoading(true);
        messagesService.addMessage({message: message.trim(), author: userName})
            .then(res => res.json())
            .then(message => {
                setMessages(messages => {
                    return [
                        ...messages,
                        message,
                    ]
                });
                setMessage('');
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false))
    };

    return (
        <div className="tx-chat-view">
            <Container className="tx-u-flex tx-u-flex--direction-column tx-u-flex--justify-flex-end tx-u-full-height">
                {messages || isLoading ? (
                    <>
                    {messages.length > 0 ? (
                        <>
                            {messages.map(msg => {
                                    const {author, message, timestamp, _id} = msg;
                                    const dateString = formatTimeString(timestamp);
                                    return (
                                        <Message
                                            key={_id}
                                            author={author}
                                            content={message}
                                            dateString={dateString}
                                            isUserAuthor={author === userName}
                                        />
                                    )
                                })}
                        </>
                    ) : (
                        <h1>No messages</h1>
                    )}
                    </>
                ) : (
                    <h1>Loading</h1>
                )}
            </Container>
            <InputButtonContainer>
                <Container className="tx-u-flex tx-u-flex--justify-space-between">
                    <div className="tx-u-flex--grow-1 tx-u-margin--right-8">
                        <Input name="message" value={message} onChange={data => setMessage(data)} placeholder="Message" />
                    </div>
                    <Button onClick={sendMessage}>Send</Button>
                </Container>
            </InputButtonContainer>
        </div>
    )
};

export default ChatView;
