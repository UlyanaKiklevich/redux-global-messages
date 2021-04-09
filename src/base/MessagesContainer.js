import React, {useState} from 'react';
import './Message.css';
import {Message} from './Message';
import {store} from "./store";


export const MessagesContainer = () => {
    const [messages, setMessages] = useState([]);

    const removeMessage = (id) => {
        store.dispatch({ type: 'hideMessage', payload: {_id: id}});
    };

    store.subscribe(() => {
        setMessages([...store.getState().messages]);
        window.scrollTo(0, 0);
    });

    return (
        <div className={'message-container'}>
            {messages.map((message, index) => <Message key={index} message={message} removeMessage={removeMessage} />)}
        </div>
    )
}