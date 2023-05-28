import { useRef, useState } from 'react'
import s from './Authorization.scss'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAccount } from '../requests/Authorization'

export const Authorization = () => {
    const [state, setState] = useState(false)
    const idInput = useRef(null)
    const tokenInput = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Введите данные вашего инстанса</h1>
            <p className={s.sub}>WhatsApp необходимо подтвердить ваш аккаунт</p>
            <label>
                <input onChange={() => setState(false)} ref={idInput}
                    className={state ? s.input + ' ' + s.error : s.input} type="text" placeholder='Id' />
            </label>
            <label>
                <input onChange={() => setState(false)} ref={tokenInput}
                    className={state ? s.input + ' ' + s.error : s.input} type="text" placeholder='ApiToken' />
                {state && (
                    <div className={s.errorName}>Инстанс не найден!</div>
                )}
            </label>
            <button className={loading ? s.btn + ' ' + s.loading : s.btn} onClick={() => {
                getAccount(idInput.current.value,
                tokenInput.current.value, setState, dispatch, navigate, setLoading)
                }}>
                {loading ? '' : 'Далее'}
            </button>
        </div>
    )
}