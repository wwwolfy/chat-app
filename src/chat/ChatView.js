import React, {useState} from 'react';
import {InputButtonContainer, Input, Button, Container} from '../ui-components';
import './ChatView.scss';

const ChatView = () => {
    const [message, setMessage] = useState('');
    return (
        <div className="tx-chat-view">
            <div className="tx-chat-view__messages">aaa</div>
            <InputButtonContainer>
                <Container className="tx-u-flex tx-u-flex--justify-space-between tx-u-padding--8">
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
