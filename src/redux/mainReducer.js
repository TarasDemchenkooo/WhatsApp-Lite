import { AUTHORIZATION, CHATID, PHONE, SEND } from "./types"

const initialState = {
    account: {
        id: null,
        token: ''
    },
    chatId: '',
    phone: '',
    messages: []
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZATION:
            return {
                ...state,
                account: action.payload
            }
        case CHATID:
            return {
                ...state,
                chatId: action.payload
            }
        case PHONE:
            return {
                ...state,
                phone: action.payload
            }
            case SEND:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}