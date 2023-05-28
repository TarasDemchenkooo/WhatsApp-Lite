import { useDispatch, useSelector } from 'react-redux'
import s from './Chat.scss'
import { getAvatar } from '../requests/getAvatar'
import React, { useEffect, useRef, useState } from 'react'
import { sendMessage } from '../requests/sendMessage'
import { Message } from './sendMessage/SendMessage'
import { height, makeid } from '../utils/utils'
import { SendAction } from '../redux/actionCreatots'
import { recieve } from '../requests/recieve'

export const Chat = () => {
    const { id, token } = useSelector(state => state.main.account)
    const chat = useSelector(state => state.main.chatId)
    const name = useSelector(state => state.main.phone)
    const text = useRef(null)
    const container = useRef(null)
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)
    const [ref, setRef] = useState('')
    const [state, setState] = useState(localStorage.getItem('messages') !== null ? localStorage.getItem('messages') : [])
    const account = JSON.parse(localStorage.getItem('account'))
    const [realChat, setRealChat] = useState('')
    if (chat !== '') {
        localStorage.setItem('chat', chat)
    }
    const [realChatId, setRealChatId] = useState(localStorage.getItem('chat'))

    useEffect(() => {
        setRealChat(localStorage.getItem('phone'))
        getAvatar(account.id, account.token, realChatId, setLoading).then(res => {
            setImage(URL.createObjectURL(res))
        })
        const interval = setInterval(() => {
            recieve(account.id, account.token, setState)
        }, 5000)
    }, [])

    useEffect(() => {
        setRef(text.current.clientHeight)
        container.current.scrollTo(0, container.current.scrollHeight)
    }, [state, ref])

    return (
        <div className={s.wrapper}>
            <div className={s.left}>
                <div className={s.leftTop}>
                    <h2 className={s.leftTitle}>Чаты</h2>
                    <div className={s.leftBorder}></div>
                </div>
                <div className={s.leftBottom}>
                    <div className={s.chatAccount + ' ' + s.chatAccountMain}>
                        <div className={loading ? s.loading + ' ' + s.avatar : s.avatar}>
                            {loading ? '' : (<img className={s.img} src={image} alt="" />)}
                        </div>
                        <div className={s.info}>
                            <div className={s.name}>{realChat}</div>
                            <div className={s.time}>был(а) недавно</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.right}>
                <div className={s.rightTop}>
                    <div className={s.chatAccount}>
                        <div className={loading ? s.loading + ' ' + s.avatar : s.avatar}>
                            {loading ? '' : (<img className={s.img} src={image} alt="" />)}
                        </div>
                        <div className={s.info}>
                            <div className={s.name}>{realChat}</div>
                            <div className={s.time}>был(а) недавно</div>
                        </div>
                    </div>
                </div>
                <div ref={container} className={s.messages}>
                    {state.length !== 0 &&
                        JSON.parse(state).map(obj => <Message key={makeid(5)} time={obj.time} className={obj.me} text={obj.message} />)
                    }
                </div>
                <div className={s.rightBottom}>
                    <label className={s.label}>
                        <textarea maxLength={10000}
                            onInput={(e) => height(e, '23px', setRef)} ref={text} className={s.input} placeholder='Введите сообщение'>
                        </textarea>
                    </label>
                    <button className={s.btn} onClick={() => {
                        if (text.current.value.length !== 0) {
                            sendMessage(account.id, account.token, realChatId === '' ? chat : realChatId, text.current.value)
                            const array = state.length !== 0 ? JSON.parse(state) : []
                            const hours = new Date().getHours()
                            let minutes = new Date().getMinutes()
                            if (String(minutes).length === 1) {
                                minutes = '0'.concat(String(minutes))
                            }
                            localStorage.setItem('messages', JSON.stringify([...array,
                            { me: true, message: text.current.value, time: { hours, minutes } }]))
                            setState(localStorage.getItem('messages'))
                            text.current.value = ''
                            height(text.current, '23px', setRef)
                        }
                    }}>
                    </button>
                </div>
            </div>
        </div>
    )
}