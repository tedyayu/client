import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Single from './pages/Single'
import Write from './pages/Write'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout=()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/single",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/single',
    element:<Single/>
  },
  {
    path:'/write',
    element:<Write/>
  },
])

function App() {
  return (
    <div className='app'>
      <div className='container'>
        
      </div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
