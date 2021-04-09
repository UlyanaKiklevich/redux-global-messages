import {store} from '../base/store';

export function useMessage() {
    const addMessage = (data) => {
        store.dispatch({ type: 'addMessage', payload: data })
    };

    const clearMessages = () => {
        store.dispatch({ type: 'clearMessages'})
    }

    return {addMessage, clearMessages};
}