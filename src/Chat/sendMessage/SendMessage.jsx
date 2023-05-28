import React from "react"
import s from './SendMessage.scss'

export const Message = ({ text, className, time }) => {
    return (
        <div className={className ? s.message : s.message + ' ' + s.recieve}>
            {text}
            <div className={s.sent}>
                {time.hours}:{time.minutes}
            </div>
        </div>
    )
}