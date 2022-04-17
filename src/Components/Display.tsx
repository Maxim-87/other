import React, {useState} from 'react';

export const Display = () => {

    const [value, setValue] = useState()

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', border: '0.5px solid red',
            width:'200px', height: '50px', marginBottom: '3px', fontWeight:'bold', fontSize:'large'}}>
            <input type={'text'}/>
        </div>
    );
};

