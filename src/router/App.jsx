import React from 'react'
import { createBrowserRouter, Routes,Route,RouterProvider} from 'react-router-dom';
import Base from '../layouts/Base';
import Home from '../pages/Home';
import About from '../pages/About';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Competance from '../pages/Competance';
import Contact from '../pages/Contact';


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
const Root = ()=>{
  return(
     <Routes>
       <Route path='/' element={<Base/>}>
         <Route path='' element={<Home/>}></Route>
         <Route path="about" element={<About/>}></Route>
         <Route path="graduation" element={<Education/>}></Route>
         <Route path="experience" element={<Experience/>}></Route>
         <Route path="skills" element={<Competance/>}></Route>
         <Route path='contact' element={<Contact/>}></Route>
       </Route>
     </Routes>
  )
}
const router = createBrowserRouter([
  {path:"*", Component : Root}
])


