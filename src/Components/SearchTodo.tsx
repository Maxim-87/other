import React, {ChangeEvent, useState} from 'react';
import {useDebounce} from "../hooks/useDebounce";

export const SearchTodo = () => {

    const [value, setValue] = useState('')
    const debouncedSearch = useDebounce(search, 1000)

    function search(query:any) {
        fetch(`https://jsonplaceholder.typicode.com/todos?=`+query)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        debouncedSearch(e.currentTarget.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    );
};

