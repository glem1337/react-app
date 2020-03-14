const initialState = {
    nav: [
        { url: "profile", text: "Profile" },
        { url: "dialogs", text: "Dialogs" },
        { url: "users", text: "Users" },
        { url: "news", text: "News" },
        { url: "music", text: "Music" },
        { url: "settings", text: "Settings" },
    ],
    friends: [
        { ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', name: "John" },
        { ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', name: "Jack" },
        { ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', name: "Jim" },
    ]
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;