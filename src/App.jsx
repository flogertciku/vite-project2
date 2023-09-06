import { useState } from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import List from './components/List'
import Details from './components/Details'
import LearningApi from './components/LearningApi'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [list, setList] = useState([])
  const [userForm,setUserForm] = useState({})

  return (
    <div className='row'>
    
    <BrowserRouter>
      <NavBar></NavBar>
    
      <Routes>
      <Route path="/form/" element={<Form list={list} setList ={setList} setUserForm ={setUserForm}/>} />
        <Route path="/form/:test" element={<Form list={list} setList ={setList} setUserForm ={setUserForm}/>} />
        <Route path="/form/:test/:firstColor/:secondColor" element={<Form list={list} setList ={setList} setUserForm ={setUserForm}/>} />
        <Route path="/form/:test/:firstColor/:secondColor" element={<Form list={list} setList ={setList} setUserForm ={setUserForm}/>} />
        <Route exact path="/" element={<LearningApi />} />
        <Route exact path="/pokemon/:pokemonName" element={<LearningApi />} />
        <Route exact path="/userList" element={<List list={list} />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
