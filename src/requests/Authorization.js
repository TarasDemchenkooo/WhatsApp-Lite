import { AuthorizationAction } from "../redux/actionCreatots"
import axios from "axios"

export const getAccount = (id, token, changer, dispatch, nav, setState) => {
    setState(true)
    axios.get(`https://api.green-api.com/waInstance${Number(id)}/getSettings/${token}`, {
        headers: { "Content-Type": "application/json" }
    }).then(res => {
        setState(false)
        dispatch(AuthorizationAction({ id: Number(id), token: token }))
        nav(`/${id}`)
        localStorage.setItem('account', JSON.stringify({id, token}))
    }).catch(e => {
        setState(false)
        changer(true)
    })
}