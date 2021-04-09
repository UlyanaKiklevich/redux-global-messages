import React  from 'react';
import {useMessage} from "../hoc/useMessage";
import './Page.css';

export const Page = () => {
    const {addMessage, clearMessages} = useMessage();

    return (
        <>
            <p>Simple Page</p>
            <button onClick={() => {addMessage({messageCode: 'error', text: 'Error text'})}}>error message</button>
            <button onClick={() => {addMessage({messageCode: 'warning', text: 'Warning text'})}}>warning message</button>
            <button onClick={() => {addMessage({messageCode: 'success', text: 'Success text'})}}>success message</button>
            <button onClick={() => {clearMessages()}}>Clear</button>
        </>
    )
}