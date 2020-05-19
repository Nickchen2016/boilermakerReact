
import React , { useState, useEffect } from 'react';

const Home = (props) =>{
  const [isEmpty, setisEmpty] = useState(true);
  const [data, setData] = useState({});
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/199/')
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
      setData({...result});
      setisEmpty(false);
    })
    .catch(error=>{
      console.error('Error: ',error)
    });
  },[])
  console.log('....',data);

return isEmpty?<div>Loading....</div>
              :<div>{Object.keys(data).map((e,index)=>{return <li key={index}>{e}</li>})}</div>

}

export default Home;