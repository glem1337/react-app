const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
    messages: [
        { text: "Message 1" },
        { text: "Message 2" },
        { text: "Message 3" },
        { text: "Message 4" },
        { text: "Message 5" },
    ],
    dialogs: [
        { id: 1, name: "UserName1", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
        { id: 2, name: "UserName2", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
        { id: 3, name: "UserName3", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
        { id: 4, name: "UserName4", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
        { id: 5, name: "UserName5", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { likes: 0, text: action.text }]
            }
        default:
            return state;
    }
}

export const addMessage = (text) => ({ type: ADD_MESSAGE, text });

export default dialogsReducer;