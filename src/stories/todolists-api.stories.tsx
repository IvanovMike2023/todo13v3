import React, {useEffect, useState} from 'react'
import {TodolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = TodolistAPI.getTodos()
            .then((res) => {
                setState(res.data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'React'
        const promise = TodolistAPI.createTodo(title)
            .then((res) => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '64114950-d0ef-4788-ab6e-fc022238d014'
        const promise = TodolistAPI.deleteTodo(todolistId)
            .then((res) =>
                setState(res.data)
            )
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '8cf49def-928b-41c0-8105-a61b9df4c8d4'
        const title = 'NewReact v'
        const promise = TodolistAPI.updateTodo(todolistId, title)
            .then((res) => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

