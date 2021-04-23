import React from 'react';
import BigBazar from './img/bb.png';
const Props2=(count)=>{
    return(
       <div>
        <img src={BigBazar} className="bigbazar" height="46px" alt="Bigbazar Logo" />
        <b className= "title">Add Cart</b>
                    <button className="supermarket">Super Market</button>
                    <b className="zeroprop">8</b>
        </div>
    )
}
export default Props2;