import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './AppLayout'

const heading = React.createElement("h1", { "id": "heading" }, "Hello World from React!")

export default function App() {
    return (
        <div>
           <AppLayout/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)