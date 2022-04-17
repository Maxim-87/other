import React, {useState} from 'react';
import {Display} from "./Display";

export const Currency = () => {

    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [value3, setValue3] = useState()


    const countHandler = () => {
        setValue2(value2 )
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center',
            width:'260px', border: '2px solid blue'}}>
        <Display/>
            <div style={{display: 'flex', flexDirection: 'column', width:'200px'}}>
                <input type={'text'} placeholder={'enter value EUR'} value={value1}/>
                <input type={'text'} placeholder={'enter value USD'} value={value2}
                        onChange={e => e.currentTarget.value}/>
                <input type={'text'} placeholder={'enter value RUB'} value={value3}/>
            </div>
            <button onClick={countHandler}> COUNT </button>

        </div>
    );
};

