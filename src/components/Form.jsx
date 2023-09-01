
import { useState } from "react";
const Form  = (props)=>{
  const {list , setList,setUserForm} = props;
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            username: username, 
            email: email, 
            password: password 
        };
        setUserForm(newUser)

        setList([...list,newUser])
        console.log("Welcome", newUser);
    };

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    return(
       <div className="col-sm-6">
    <form class="row g-3" onSubmit={ createUser }>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="text" class="form-control" id="inputEmail4"  onChange={ (e) => setEmail(e.target.value) }></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="text" class="form-control" id="inputPassword4" onChange={ (e) => setPassword(e.target.value) }></input>
  </div>
  <div class="col-12">
    <label for="username" class="form-label">username</label>
    <input type="text" class="form-control" id="username" onChange={ (e) => setUsername(e.target.value)} placeholder="username"></input>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

       </div> 
    )
}
export default Form;