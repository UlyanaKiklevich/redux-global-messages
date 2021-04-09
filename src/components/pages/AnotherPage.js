import React  from 'react';
import {useMessage} from "../hoc/useMessage";
import './styles/Page.css';

export const AnotherPage = () => {
    const {addMessage, clearMessages} = useMessage();

    return (
        <>
            <h1>Simple Page</h1>
            <button onClick={() => {addMessage({messageCode: 'error', text: 'Error text'})}}>error message</button>
            <button onClick={() => {addMessage({messageCode: 'warning', text: 'Warning text'})}}>warning message</button>
            <button onClick={() => {addMessage({messageCode: 'success', text: 'Success text'})}}>success message</button>
            <button onClick={() => {clearMessages()}}>Clear</button>
        </>
    )
}