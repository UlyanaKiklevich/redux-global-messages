import React, { useState } from 'react';
import {useMessage} from "../hoc/useMessage";

export const Page = () => {
    const [count, setCount] = useState(0);
    const {addMessage, clearMessages} = useMessage();

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <button onClick={() => {addMessage({messageCode: 'error', text: 'Error text'})}}>error message</button>
            <button onClick={() => {addMessage({messageCode: 'warning', text: 'Warning text'})}}>warning message</button>
            <button onClick={() => {addMessage({messageCode: 'success', text: 'Success text'})}}>success message</button>
            <button onClick={() => {clearMessages()}}>Clear</button>
        </>
    )
}