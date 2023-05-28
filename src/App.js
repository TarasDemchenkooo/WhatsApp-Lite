import React from "react"
import { Routes, Route } from "react-router-dom"
import { Authorization } from "./Authorization/Authorization"
import { CreateChat } from "./CreateChat/CreateChat"
import { Chat } from "./Chat/Chat"

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Authorization/>}/>
            <Route path='/:id' element={<CreateChat/>}/>
            <Route path='/chat/:id' element={<Chat/>}/>
        </Routes>
    )
}