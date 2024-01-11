import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}
const baseURL = 'https://social-network.samuraijs.com/api/1.1'
const config = {withCredentials: true}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       const promise = axios.get(`${baseURL}/todo-lists`,config )
           .then((res)=>{
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
        const promise = axios.post(`${baseURL}/todo-lists`,{title},config)
            .then((res)=>setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId= '64114950-d0ef-4788-ab6e-fc022238d014'
        const promise = axios.delete(`${baseURL}/todo-lists/${todolistId}`,config)
            .then((res)=> {
                setState(res.data)
                console.log(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

