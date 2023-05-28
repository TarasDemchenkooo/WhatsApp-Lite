import axios from "axios"
import { ChatIdAction, PhoneAction } from "../redux/actionCreatots"

export const WhatsAppExists = (id, token, number, set, dispatch, nav, setState) => {
    const current = number.match(/[^\s-()+]/g).join('')
    setState(true)

    axios.post(`https://api.green-api.com/waInstance${id}/checkWhatsapp/${token}`, {
        phoneNumber: current
    }, {
        headers: { "Content-Type": "application/json" }
    }).then(res => {
        set(res.data.existsWhatsapp)
        setState(false)
        if (res.data.existsWhatsapp) {
            dispatch(ChatIdAction(current.concat('@c.us')))
            dispatch(PhoneAction(number))
            nav(`/chat/${String(number)}`)
            localStorage.setItem('phone', number)
            localStorage.setItem('chat', String(current).concat('@c.us'))
        }
    }).catch(e => {
        setState(false)
    })
}
