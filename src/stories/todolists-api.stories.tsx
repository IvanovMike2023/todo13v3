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
export const CreateTasks = ()=>{
    const [state,setState]= useState<any>(null)
    useEffect(()=>{
        const todolistId = '8cf49def-928b-41c0-8105-a61b9df4c8d4'
        const title= 'sacacas'
const promise = TodolistAPI.postTasks(title,todolistId)
    .then((res)=> {
        console.log(res.data.data)
        setState(res.data.data)
    })
            },[])
    return <div>{JSON.stringify(state)}</div>
}
export const GetTasks = ()=>{
    const [state,setState]= useState<any>(null)
    useEffect(()=>{
        const todolistId = '8cf49def-928b-41c0-8105-a61b9df4c8d4'
const promise = TodolistAPI.getTasks(todolistId)
    .then((res)=> {
        console.log(res.data)
        setState(res)
    })
    },[])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTasks = ()=>{
    const [state,setState]= useState<any>(null)
    useEffect(()=>{
        const todolistId = '8cf49def-928b-41c0-8105-a61b9df4c8d4'
        const taskId ='20a77369-0cbc-4ac9-8dcc-d26d5cac8830'
        const title = 'ssssss'
const promise = TodolistAPI.updateTasks(todolistId,taskId,title)
    .then((res)=> {
        setState(res)
    })
    },[])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTasks = ()=>{
    const [state,setState]= useState<any>(null)
    useEffect(()=>{
        const todolistId = '8cf49def-928b-41c0-8105-a61b9df4c8d4'
        const taskId ='da655f8b-df2b-4561-9bcc-f25d3b64093d'
const promise = TodolistAPI.deleteTasks(todolistId,taskId)
    .then((res)=> {
        console.log(res.data)
        setState(res)
    })
    },[])
    return <div>{JSON.stringify(state)}</div>
}

