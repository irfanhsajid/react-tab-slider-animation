
import ReactTab from './pages/TabChanging/ReactTab'
import CSSAnimation from './pages/Animation/CSSAnimation'

import ImageSlider from './pages/Carousel/ImageSlider'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tabs' element={<ReactTab/>}/>
        <Route path='/slider' element={<ImageSlider/>}/>
        <Route path='/animation' element={<CSSAnimation/>}/>
      </Routes>
    </>
  )
}

export default App
