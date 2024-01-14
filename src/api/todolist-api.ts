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
    },
    postTasks(title:string,todolistId: string) {
        return instance.post<ResponseType>(`/todo-lists/${todolistId}/tasks`,{title})
    },
    getTasks(todolistId: string) {
        return instance.get<ResponseType>(`/todo-lists/${todolistId}/tasks?count=1?page=2`)
    },
    updateTasks(todolistId: string,taskId:string,title:string) {
        return instance.put<ResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`,{title})
    },
    deleteTasks(todolistId: string,taskId:string) {
        return instance.delete<ResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
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