import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

// store.subscribe(() => {
//     saveState({
//         counter: store.getState().counter
//     })
// })

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store