
import { useState, useEffect } from 'react';

export const useDataArr = () =>{
    const [numArray, setnumArray] = useState([]);

    useEffect(()=>{
        let arr = [];
        for(let i=0;i<100;i++){
           let num = Math.floor(Math.random()*100+1);
           arr.push(num)
        }
        setnumArray([...arr]);
        console.log('....',numArray);
    },[]);
    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(result=>{
    //       console.log(result);
    //       setData({...result});
    //     //   setisEmpty(false);
    //     })
    //     .catch(error=>{
    //       console.error('Error: ',error)
    //     });
    //   },[])
    return [numArray];

}
