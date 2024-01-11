//DAL
import axios from "axios";

const instance = axios.create({withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.1'})

export const TodolistAPI = {
    getTodos() {
        return instance.get<TodolistType[]>(`/todo-lists`)
    },
    createTodo(title: string) {
        return instance.post<CreateTodoListType>(`/todo-lists`, {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todolistId}`)
    },
    updateTodo(todolistId: string, title: string) {

        return instance.put<ResponseType>(`/todo-lists/${todolistId}`, {title})
    }
}
type TodolistType = {
    "id": string
    "title": string
    "addedDate": Date
    "order": number
}
type CreateTodoListType = {
    resultCode: number
    messages: string[]
    data: {
        item: TodolistType
    }
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}