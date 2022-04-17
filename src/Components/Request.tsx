import React, {ChangeEvent, useState} from 'react';
import {useDebounce} from "../hooks/useDebounce";
import {useRequest} from "../hooks/useRequest";
import axios from "axios";

export const Request = () => {

    const [todos,loading, error]: any = useRequest(fetchTodos)


    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
               }

    if(loading) {
        return <div> LOADING... </div>
    }

    if(error) {
        return <div> ERROR... </div>
    }
    return (
        <div>
            {todos && todos.map((t: any) =>
                <div key={t.id} style={{padding: '30px', border: '2px solid black'}}>
                    {t.id}. {t.title}
                </div>
            )}
        </div>
    );
};

