import axios from "axios"

export const getAvatar = async (id, token, chat, setState) => {
    setState(true)
    
    const getUrl = await axios.post(`https://api.green-api.com/waInstance${id}/GetContactInfo/${token}`,
        { chatId: chat }, { headers: { 'Content-Type': 'application/json' } })

    const getBlob = await fetch(getUrl.data.avatar, {method: 'GET'})
    
    const blob = getBlob.blob()

    setState(false)

    return blob
}