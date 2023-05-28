import { useEffect, useRef, useState } from 'react'
import s from './CreateChat.scss'
import { WhatsAppExists } from '../requests/WhatsAppExists'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReactInputMask from 'react-input-mask'

export const CreateChat = () => {
    const number = useRef(null)
    const [state, setState] = useState(true)
    const { id, token } = useSelector(state => state.main.account)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const [loading, setLoading] = useState(false)
    const [account, setAccount] = useState({})

    useEffect(() => {
        setAccount(JSON.parse(localStorage.getItem('account')))
    }, [])

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>С кем будем общаться?</h1>
            <label>
                <ReactInputMask maskChar=" " onChange={() => setState(true)} ref={number} mask='+7 (999) 999-99-99'
                    placeholder='+7 (999) 999-99-99' className={!state ? s.input + ' ' + s.error : s.input} />
                {!state && (
                    <div className={s.errorName}>Такого номера нет в WhatsApp</div>
                )}
            </label>
            <button className={loading ? s.btn + ' ' + s.loading : s.btn} onClick={() => {
                if (number.current.value.length !== 0) {
                    WhatsAppExists(account.id, account.token,
                        number.current.value, setState, dispatch, nav, setLoading)
                }
            }}>
                {loading ? '' : 'Написать'}
            </button>
        </div>
    )
}