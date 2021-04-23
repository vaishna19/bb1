import React from 'react';
import { useHistory } from "react-router-dom";
const Props1=()=>{
    let history = useHistory();
    const clickfn = () => {
        alert("d")
        history.push('/props')
    }
    return(
        <>
        <p>welcome to bigbazar</p>
        <button onClick={clickfn}> Submit</button>
    </>
    )
}
export default Props1;