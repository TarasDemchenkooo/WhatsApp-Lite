import axios from "axios"

export const sendMessage = (id, token, chatId, message) => {
    axios.post(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, { chatId, message }, {
        headers: {
            "Content-Type": 'application/json'
        }
    })
}