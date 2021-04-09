import React, {useState} from 'react';
import './styles/Message.css';
import {Message, store} from './';

export const MessagesContainer = () => {
    const [messages, setMessages] = useState([]);

    store.subscribe(() => {
        setMessages([...store.getState().messages]);
        window.scrollTo(0, 0);
    });

    return (
        <div className={'message-container'}>
            {messages.map((message, index) =>
                <Message key={index} message={message} />)}
        </div>
    )
}