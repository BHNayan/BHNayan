import React from 'react';
import { useState } from 'react';

const Test = () => {

  const [number, setNumber] = useState(1);

 const getnumber =(e)=>{
  setNumber(e.target.name)
  console.log(number);
 }

  return (
    <div>
        <button className='border-[2px] border-black text-black text-center'
        onClick={getnumber}
        name={10}
        >
            10
        </button>

    </div>
  )
}

 export default Test