
import React , { useState, useEffect, useCallback } from 'react';
import {useDataArr} from './DataArr';

const Table=(props)=>{
    const [numArray, setnumArray] = useDataArr();
    const sortit = ()=>{
        console.log('hi!')
    }

    return (
        <div>
            <div id='cart-table'>{numArray.map((e,i)=>{
                return <div key={i} id={'col'+i} style={{height:e+"%"}} ></div>})}
            </div>
            <div id='sortBtn' onClick={sortit}>Merge Sort</div>
        </div>
    )

}

export default Table;