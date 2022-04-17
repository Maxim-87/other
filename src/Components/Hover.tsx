import React, {useRef} from 'react';
import {useHover} from "../hooks/useHover";

export const Hover = () => {

    const ref: any = useRef()
    const isHover = useHover(ref);

    console.log(isHover)

    return (
        <div ref={ref} style={isHover ? {width: 300, height: 300, background: 'red'} : {width: 300, height: 300, background: 'yellow'}}>

        </div>
    );
};

