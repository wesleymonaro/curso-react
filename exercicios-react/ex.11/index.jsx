//Integrando  o React com Redux

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import fieldReducer from './fieldReducer'

import Field from './field'

const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)} >
        <Field initialValue='teste' />
    </Provider>
, document.getElementById('app'))