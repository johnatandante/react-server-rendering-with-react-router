import React from 'react'

// not render, but hydrate, cause we are already rendere
import {hydrate} from 'react-dom'
import App from '../shared/App'

hydrate(
    <App data={window.__INITIAL_DATA__}/>,
    document.getElementById('app')
)

