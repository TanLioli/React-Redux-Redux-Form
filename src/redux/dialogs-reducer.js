const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Pavel'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Artem'},
        {id: 6, name: 'Serega'}
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Hello!'},
        {id: 4, message: 'Hello!'},
        {id: 5, message: 'Hello!'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;