
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import { Contact } from './components/Contact/Contact'
import { Portfolio } from './components/Portfolio/Portfolio'
import { About } from './components/About/About'
import Layout from './components/Layout/Layout'
import { Home } from './components/Home/Home'


let x = createBrowserRouter([
  {path:'' , element:<Layout/> , children: [
    {index:true , element:<Home/> },
    {path: 'About' , element:<About/> },
  {path:'Portfolio' , element:<Portfolio/> },
  {path:'Contact' , element:<Contact/> },
  ]}
  
])
function App() {
  

  return <RouterProvider router={x}></RouterProvider>
}

export default App
