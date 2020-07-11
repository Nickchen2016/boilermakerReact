
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

    return [numArray];

}
