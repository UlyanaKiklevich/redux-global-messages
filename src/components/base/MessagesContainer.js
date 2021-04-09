import React, {useState} from 'react';
import './styles/Message.css';
import {Message} from './Message';
import {store} from "./store";
import {useMessage} from "../hoc/useMessage";


export const MessagesContainer = () => {
    const [messages, setMessages] = useState([]);
    const {hideMessage} = useMessage();

    const removeMessage = (_id) => {
        hideMessage(_id);
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