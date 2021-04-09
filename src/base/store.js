import { createStore } from 'redux';

const initialState = {
    messages: []
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "addMessage":
            state.messages.push({...action.payload, _id: '_' + Math.random().toString(36).substr(2, 9)})
            return { ...state }
        case "clearMessages":
            state.messages = [];
            return { ...state };
        default:
            return state;
    }
}

export const store = createStore(counterReducer);
