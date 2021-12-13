import {useState, useEffect} from 'react';
import MessageModel from '../models/Message';
import messagesService from '../../services/messagesService';

const useMessages = (scrollRef) => {
    const [messages, setMessages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        messagesService.getMessages({timestamp: null, limit: null})
            .then(res => res.json())
            .then(messagesDTO => {
                const messages = messagesDTO.map(messageDTO => {
                    return new MessageModel().fromDTO(messageDTO);
                });
                setMessages(messages);
                scrollRef.current.scrollIntoView({ behavior: "smooth" });
            })
            .catch(err => console.error(err));
    }, [scrollRef]);

    const sendMessage = (message, userName, callback) => {
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
                callback('');
                scrollRef.current.scrollIntoView({ behavior: "smooth" });
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false))
    };


    return {
        messages,
        isLoading,
        sendMessage,
    }
};

export default useMessages;
