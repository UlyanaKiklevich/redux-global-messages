import {store} from '../base';

export function useMessage() {
    const addMessage = (data) => {
        store.dispatch({type: 'addMessage', payload: data})
    };

    const clearMessages = () => {
        store.dispatch({type: 'clearMessages'})
    }

    const hideMessage = (_id) => {
        store.dispatch({type: 'hideMessage', payload: {_id}})
    }

    return {addMessage, clearMessages, hideMessage};
}