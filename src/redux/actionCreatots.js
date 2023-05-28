import { AUTHORIZATION, CHATID, PHONE, SEND } from "./types"

export const AuthorizationAction = (payload) => ({ type: AUTHORIZATION, payload })

export const ChatIdAction = (payload) => ({ type: CHATID, payload })

export const PhoneAction = (payload) => ({ type: PHONE, payload })

export const SendAction = (payload) => ({ type: SEND, payload })
