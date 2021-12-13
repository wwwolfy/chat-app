import React, {useState, useEffect, useRef} from 'react';
import {InputButtonContainer, Input, Button, Container, Message} from '../ui-components';
import MessageModel from './models/Message';
import messagesService from '../services/messagesService';
import './ChatView.scss';

const userName = 'Slobodan';

const ChatView = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        messagesService.getMessages({timestamp: null, limit: null})
            .then(res => res.json())
            .then(messagesDTO => {
                const messages = messagesDTO.map(messageDTO => {
                    const message = new MessageModel();
                    return message.fromDTO(messageDTO);
                });
                setMessages(messages);
                scrollRef.current.scrollIntoView({ behavior: "smooth" });
            })
            .catch(err => console.error(err));
    }, []);

    const sendMessage = () => {
        if (!message || !message.trim().length > 0) return;
        setIsLoading(true);
        messagesService.addMessage({message: message.trim(), author: userName})
            .then(res => res.json())
            .then(messageDTO => {
                const message = new MessageModel().fromDTO(messageDTO);
                setMessages(messages => {
                    return [
                        ...messages,
                        message,
                    ]
                });
                setMessage('');
                scrollRef.current.scrollIntoView({ behavior: "smooth" });
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false))
    };

    return (
        <div className="tx-chat-view">
            <Container className="tx-u-flex tx-u-flex--direction-column tx-u-flex--justify-flex-end">
                {messages || isLoading ? (
                    <>
                    {messages.length > 0 ? (
                        <>
                            {messages.map(msg => {
                                const {author, message, dateString, id} = msg;
                                return (
                                    <Message
                                        key={id}
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
            <div ref={scrollRef} />
            <InputButtonContainer>
                <Container className="tx-c-container--footer tx-u-flex tx-u-flex--justify-space-between">
                    <div className="tx-u-flex--grow-1 tx-u-margin--right-8">
                        <Input name="message" value={message} onChange={data => setMessage(data)} placeholder="Message" />
                    </div>
                    <Button onClick={sendMessage} isDisabled={isLoading}>Send</Button>
                </Container>
            </InputButtonContainer>
        </div>
    )
};

export default ChatView;
