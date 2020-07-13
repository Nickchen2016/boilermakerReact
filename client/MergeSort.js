import { useState, useEffect } from 'react';

export const useMergeSort = (props) =>{
    // const [mergeSort, setmergeSort] = useState([]);
    if(props.length<2) {
        // setmergeSort([...props]);
        return props;
    }
    const mid = Math.floor(props.length/2);

    const lSide = props.slice(0,mid);
    const rSide = props.slice(mid);
    let a = mergeHelper(useMergeSort(lSide), useMergeSort(rSide));
    console.log(a)
    return a;
}

    const mergeHelper = (l,r)=>{
        let lIdx = 0,
            rIdx = 0;
          let final = [];
        while(lIdx< l.length && rIdx< r.length){
            const lEl = l[lIdx];
            const rEl = r[rIdx];
            if(lEl<rEl){
              final.push(lEl);
              lIdx++;
            }else{
              final.push(rEl);
              rIdx++;
            }
        }
        return [...final, ...l.slice(lIdx), ...r.slice(rIdx)];
    }