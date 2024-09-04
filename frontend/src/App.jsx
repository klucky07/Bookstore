import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CreateBooks } from './pages/CreateBooks'
import { DeleteBook } from './pages/DeleteBook'
import { EditBook } from './pages/EditBook'
import { ShowBooks } from './pages/ShowBooks'

function App() {
  const [count, setCount] = useState(0)

  return <div >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/details' element={<ShowBooks/>}/>
    </Routes>
  </div>
}

export default App
