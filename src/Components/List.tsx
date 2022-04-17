import React, { useRef, useState} from 'react';
import {useScroll} from "../hooks/useScroll";

export const List = () => {

    const [todos, setTodos]: any = useState([])

    // const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const limit = 20;
    const parentRef: any = useRef();
    const childRef: any = useRef();
    const intersected = useScroll(parentRef,childRef, () => fetchApi(page, limit))


   function fetchApi(page: number, limit: number) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos((prev: any) => [...prev, ...json])
                setPage(prev => prev + 1)
            })
    }

    return (
        <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
            {todos.map((t: any) =>
                <div key={t.id} style={{padding: '30px', border: '2px solid black'}}>
                    {t.id}. {t.title}
                </div>
            )}
            <div ref={childRef}/>
        </div>
    );
};

