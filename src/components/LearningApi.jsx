import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link ,useNavigate
  } from "react-router-dom";

const LearningApi = props => {
    // Note the second argument is an empty array
    const [responseData, setResponseData] = useState(null);
    const [loaded,setLoaded]=useState(false)
    const [numb,setNumb]=useState(0)

    // using dns , we are calling http://www.example.com instead of 19.193.3.1
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        .then(response => {console.log("u thiirr"); setResponseData(response.data.results)  })
        .then(res=>setLoaded(true))
        .catch(err=>{console.log(err); setResponseData("error")});
    },[numb]); 
    const showPokemons =()=>{
      setNumb(prev=>prev+=1)
      setLoaded(!loaded)
    }
    return (
        <div>
            {numb}
            <button onClick={showPokemons}>Show Pokemons </button>
            {  loaded? responseData.map((pokemon,index) =>{
                return(<div key={index}>
                    <Link></Link>
                    <h2>{pokemon.name}</h2>
                </div>)
            }) : "Loading"}
        </div>
    )
}

export default LearningApi;

