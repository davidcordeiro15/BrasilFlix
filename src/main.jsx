import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from "../src/pages/Home" 
import MovieListPage from "../src/pages/MovieListPage"
import GenreListPage from "../src/pages/GenreListPage"
import PageNotFound from '../src/pages/PageNotFound.jsx'
import MovieDetailPage from "../src/pages/MovieDetailPage"
import MoviesByGenrePage from "../src/pages/MoviesByGenrePage"
import Contato from './pages/Contato.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      {path:'filmes', element: <MovieListPage/>},
      {path:'generos', element: <GenreListPage/>},
      {path:'/filmes/:id', element: <MovieDetailPage/>},
      {path: '/generos/:id', element: <MoviesByGenrePage/>},
      {path: '/contato', element: <Contato/>},
      {path: '*', element:<PageNotFound/>}
      
    ]
  }
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)





