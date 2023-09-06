import {
  Link ,useNavigate
} from "react-router-dom";

const NavBar =(props)=>{
  const navigate = useNavigate();
    const {pageNumber,pageTitle} = props
    const handleClick =()=>{
      navigate("/userList")
    }
    const handleClick2 =()=>{
      navigate("/form")
    }
    
    

    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{pageNumber}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li  onClick={handleClick2} class="nav-item">
          {/* <a >{pageTitle}</a> */}
          <a>Form </a>
        </li>
        <li onClick={handleClick} class="nav-item">
          {/* <a  href="#">Features</a> */}
          <button class="nav-link" > User List</button>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
        </>
    )
}
export default NavBar;