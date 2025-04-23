
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import FeedList from './components/FeedList'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'

function App() {
  

  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recipes' element={<FeedList/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Signup/>}/>
          </Routes>
          <Footer/>
        </Router>
    </>
  )
}

export default App
