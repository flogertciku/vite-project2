import { useState } from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import List from './components/List'
import Details from './components/Details'
import LearningApi from './components/LearningApi'
function App() {
  const [list, setList] = useState([])
  const [userForm,setUserForm] = useState({})

  return (
    <div className='row'>
    {/* <NavBar pageNumber= {4} pageTitle= "HomePAge"></NavBar>
    <Form  list = {list} setList= {setList} setUserForm= {setUserForm}></Form>
    <List list= {list}></List>
    <Details userName ={ userForm.username} email={userForm.email} password= {userForm.password}></Details>
    */}
  <LearningApi></LearningApi>


    </div>
  )
}

export default App
