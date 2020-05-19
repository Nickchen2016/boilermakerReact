
import React , { useState, useEffect, useCallback } from 'react';
import {useDataArr} from './DataArr';

const Table=(props)=>{
    const [numArray, setnumArray] = useDataArr();


    return <div id='cart-table'>{numArray.map((e,i)=>{
        return <div key={i} id={'col'+i} style={{height:e+"%"}} ></div>
    })}</div>

}

export default Table;