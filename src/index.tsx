import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './state/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//
//
// **********
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // TYPES
// type ProductType = {
//     id: string
//     title: string
//     description: string
//     price: number
// }
//
// type FilmType = {
//     id: number
//     nameOriginal: string
//     description: string
//     ratingImdb: number
// }
//
// type ProductsResponseType = {
//     total: number
//     messages: string[]
//     page: number
//     pageCount: number
//     data: ProductType[]
// }
//
// type FilmsResponseType = {
//     total: number
//     messages: string[]
//     page: number
//     pageCount: number
//     data: FilmType[]
// }
// type CommonResponseType<T = {}> = {
//     total: number
//     messages: string[]
//     page: number
//     pageCount: number
//     data: FilmType[]
// }
// type CommonResponseType = {
//     total:
//     messages: string[]
//     page: number
//     pageCount: number
//     data: FilmType[]
// }
//
//
//
// // Api
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//     getProducts() {
//         return instance.get<ProductsResponseType>('products')
//     },
//     getFilms() {
//         return instance.get<FilmsResponseType>('films')
//     }
// }
//
//
// // App
// const App = () => {
//     return (
//         <>
//             <h1>🛒 Products && 🎦 Films</h1>
//             <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
//                 <Products/>
//                 <Films/>
//             </div>
//         </>
//     )
// }
//
// const Products = () => {
//
//     const [products, setProducts] = useState<ProductType[]>([])
//
//     useEffect(() => {
//         api.getProducts()
//             .then((res) => setProducts(res.data.data))
//     }, [])
//
//     return (
//         <div style={{width: '45%'}}>
//             <h2>🛒 Products</h2>
//             <div>
//                 {
//                     products.map(p => {
//                         return (
//                             <div key={p.id}>
//                                 <b>{p.title}</b>
//                                 <p>{p.description}</p>
//                                 <p>💵 {p.price} $</p>
//                             </div>
//                         )
//                     })
//                 }</div>
//         </div>
//     )
// }
//
// const Films = () => {
//
//     const [films, setFilms] = useState<FilmType[]>([])
//
//     useEffect(() => {
//         api.getFilms()
//             .then((res) => setFilms(res.data.data))
//     }, [])
//
//     return (
//         <div style={{width: '45%'}}>
//             <h2>🎦 Films</h2>
//             <div>
//                 {
//                     films.map(f => {
//                         return (
//                             <div key={f.id}>
//                                 <b>{f.nameOriginal}</b>
//                                 <p>{f.description}</p>
//                                 <p>⭐ {f.ratingImdb} </p>
//                             </div>
//                         )
//                     })
//                 }</div>
//         </div>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// 📜 Описание:
// При запуске проекта на экране вы увидите 2 списка: Products и Films.
// С ними все хорошо, но обратите внимание на типизацию ответов с сервера ProductsResponseType и FilmsResponseType.
// Дублирование типов на лицо.
// Ваша задача написать дженериковый тип CommonResponseType и заменить им дублирующие типы.
// Очередность свойств в типах менять запрещено (по причине что нам будет тяжело перебрать все правильные варианты :) )
// Параметр тип назовите буквой T
//
// В качестве ответа нужно скопировать полностью рабочий дженериковый тип CommonResponseType
//
// 🖥 Пример ответа:
// type CommonResponseType = {
//   total: T
//   messages: T[]
//   page: T
//   pageCount: T
//   data: T[]
// }




//?????
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // Types
// type PhotoType = {
//     albumId: string
//     id: string
//     title: string
//     url: string
// }
//
// type PayloadType = {
//     title: string
//     url?: string
// }
//
// // Api
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const photoId = '637df6dc99fdc52af974a517'
//
// const photosAPI = {
//     getPhoto() {
//         return instance.get<PhotoType>(`photos/${photoId}`)
//     },
//     updatePhoto(payload: PayloadType) {
//         return instance.put<PhotoType>(`photos/${photoId}`, {title:payload.url})
//     }
// }
//
//
// // App
// export const App = () => {
//
//     const [photo, setPhoto] = useState<PhotoType | null>(null)
//
//     useEffect(() => {
//         photosAPI.getPhoto()
//             .then((res) => {
//                 setPhoto(res.data)
//             })
//     }, [])
//
//     const updatePhotoHandler = () => {
//         // ❗ title и url указаны в качестве заглушки. Server сам сгенерирует новый title
//         const payload = {
//             title: 'Новый title',
//             url: 'data:image/png;base64,iVBORw0FAKEADDRESSnwMZAABJRUrkJggg=='
//         }
//         photosAPI.updatePhoto(payload)
//             .then((res) => {
//                 setPhoto(res.data)
//             })
//     };
//
//     return (
//         <>
//             <h1>📸 Фото</h1>
//             <div>
//                 <div style={{marginBottom: '15px'}}>
//                     <h1>title: {photo?.title}</h1>
//                     <div><img src={photo?.url} alt=""/></div>
//                 </div>
//                 <button style={{marginLeft: '15px'}}
//                         onClick={updatePhotoHandler}>
//                     Изменить title
//                 </button>
//             </div>
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// 📜 Описание:
// При нажатии на кнопку "Изменить title" title должен обновиться,
// но из-за невнимательности была допущена ошибка и изменение не происходит
//
// Найдите и исправьте ошибку
// Исправленную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: photosAPI.updatePhotoTitle(id, title)




