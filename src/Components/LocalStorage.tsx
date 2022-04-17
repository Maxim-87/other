import React, {useEffect, useState} from 'react';

export const LocalStorage = () => {

    const [value, setValue] = useState(0)

    const setLocalStorage = () => {
        localStorage.setItem('counter value', JSON.stringify(value))
    }

    useEffect(() => {
        let localStorageValue = localStorage.getItem('counter value')
        if (localStorageValue) {
            let newValue = JSON.parse(localStorageValue)
            setValue(newValue)

        }
    }, [])

    const getLocalStorage = () => {
        let localStorageValue = localStorage.getItem('counter value')
        if (localStorageValue) {
            let newValue = JSON.parse(localStorageValue)
            setValue(newValue)

        }
    }

    const clearLocalStorage = () => {
        localStorage.clear()
        setValue(0)
    }

    return (

            <div className="App">
                <h1> {value} </h1>
                <button onClick={() => setValue(value + 1)}> increment </button>
                <button onClick={setLocalStorage}> setLocalStorage </button>
                <button onClick={getLocalStorage}> getLocalStorage </button>
                <button onClick={clearLocalStorage}> clearLocalStorage </button>
        </div>
    );
};

