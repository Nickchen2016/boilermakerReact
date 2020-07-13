
import React , { useState, useEffect, useCallback } from 'react';
import {useDataArr} from './DataArr';
import {useMergeSort} from './MergeSort';

const Table=(props)=>{
    const [numArray, setnumArray] = useDataArr();
    const [result, setresult] = useState([]);
    const mergeSort = ()=>{
        let a = useMergeSort(numArray);
        setresult(a);
    }    
    console.log(numArray)    
    return (
        <div>
            <div id='cart-table'>
                {result.length>0?
                    result.map((e,i)=>{
                        return <div key={i} id={'col'+i} style={{height:e+"%"}}></div>})
                    :numArray.map((e,i)=>{
                        return <div key={i} id={'col'+i} style={{height:e+"%"}}></div>})}
            </div>
            <div id='sortBtn'>
                <div className='btnStyle' onClick={mergeSort}>Merge Sort</div>
            </div>
        </div>
    )

}

export default Table;