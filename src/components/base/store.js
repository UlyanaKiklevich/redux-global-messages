import { createStore } from 'redux';

const initialState = {
    messages: []
};

function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case "addMessage":
            state.messages.push({...action.payload, _id: '_' + Math.random().toString(36).substr(2, 9)})
            return { ...state }
        case "clearMessages":
            state.messages = [];
            return { ...state };
        case "hideMessage":
            state.messages = state.messages.filter(message => message._id !== action.payload._id);
            return { ...state };
        default:
            return state;
    }
}

export const store = createStore(messagesReducer);
