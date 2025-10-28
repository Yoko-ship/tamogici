import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Root from './components/Root'
import Main from './components/Main'
import Pets from './components/Pets'

  const router = createBrowserRouter([
    {path:'/',element:<Root/>,children:[
      {index:true,element:<Main/>},
      {path:'/pets',element:<Pets/>}
    ]}
  ])


function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
