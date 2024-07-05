import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Body from './Body'
const data = require('./data')


export default function AppLayout() {
    return (
        <div className="app">
            <Header />
            <Body data={data} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)