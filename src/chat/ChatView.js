import React, {useState} from 'react';
import {InputButtonContainer, Input, Button, Container, Message} from '../ui-components';
import './ChatView.scss';

const ChatView = () => {
    const [message, setMessage] = useState('');
    return (
        <div className="tx-chat-view">
            <Container className="tx-u-flex tx-u-flex--direction-column tx-u-flex--justify-flex-end tx-u-full-height">
                <Message
                    author="Sloba"
                    content="Ovo je prva poruka i bice nmozda malo poduza cisto da vidimo kako staje u trenutni dizajn veliki pozdravb os nas"
                    dateString="10 Mar 2021 16:45"
                />
                <Message
                    content="Cool"
                    dateString="10 Mar 2021 16:47"
                />
            </Container>
            <InputButtonContainer>
                <Container className="tx-u-flex tx-u-flex--justify-space-between">
                    <div className="tx-u-flex--grow-1 tx-u-margin--right-8">
                        <Input name="message" value={message} onChange={data => setMessage(data)} placeholder="Message" />
                    </div>
                    <Button>Send</Button>
                </Container>
            </InputButtonContainer>
        </div>
    )
};

export default ChatView;
