import React, {useState, useRef} from 'react';
import {InputButtonContainer, Input, Button, Container, Message} from '../ui-components';
import useMessages from './hooks/useMessages';
import './ChatView.scss';

const userName = 'Slobodan';
const emptyMessageRegex = /^[ \t\r\n]*$/;

const ChatView = () => {
    const [message, setMessage] = useState('');
    const scrollRef = useRef(null);
    const {messages, isLoading, sendMessage} = useMessages(scrollRef);

    const isButtonDisabled = isLoading || emptyMessageRegex.test(message);

    const onSendMessage = () => {
        sendMessage(message, userName, setMessage);
    };

    const onKeyDownHandler = e => {
        const {key} = e;
        if (isButtonDisabled || key !== 'Enter') return;

        e.preventDefault();
        sendMessage(message, userName, setMessage);
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
                        <Input name="message" value={message} onChange={data => setMessage(data)} placeholder="Message" onKeyDown={onKeyDownHandler}/>
                    </div>
                    <Button onClick={onSendMessage} isDisabled={isButtonDisabled}>Send</Button>
                </Container>
            </InputButtonContainer>
        </div>
    )
};

export default ChatView;
