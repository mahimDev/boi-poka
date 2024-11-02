import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Page/Home/Home'
import BookDetails from './Components/BookDetails/BookDetails'
import ListedBooks from './Components/ListedBooks/ListedBooks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <div>page not defind</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../booksData.json")
      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("../booksData.json")
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
