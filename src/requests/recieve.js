import axios from "axios"

export const recieve = (id, token, changer) => {
    const chat = localStorage.getItem('chat')

    axios.get(`https://api.green-api.com/waInstance${id}/receiveNotification/${token}`, {
        headers: { "Content-Type": 'application/json' }
    }).then(res => {
        if (res.data !== null && res.data.body.senderData.sender === chat) {
            const idMessage = res.data.receiptId
            const message = res.data.body.messageData.textMessageData.textMessage
            const messages = localStorage.getItem('messages') === null ? [] : JSON.parse(localStorage.getItem('messages'))
            const hours = new Date().getHours()
            let minutes = new Date().getMinutes()
            if (String(minutes).length === 1) {
                minutes = '0'.concat(String(minutes))
            }
            localStorage.setItem('messages', JSON.stringify([...messages, { me: false, message, time: { hours, minutes } }]))
            changer(localStorage.getItem('messages'))
            axios.delete(`https://api.green-api.com/waInstance${id}/deleteNotification/${token}/${idMessage}`)
        } if (res.data !== null && res.data.body.senderData.sender !== chat) {
            const idMessage = res.data.receiptId
            axios.delete(`https://api.green-api.com/waInstance${id}/deleteNotification/${token}/${idMessage}`)
        }
    })
}