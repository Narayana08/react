import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './AppLayout'

const heading = React.createElement("h1", { "id": "heading" }, "Hello World from React!")

const JSXHeading = () => {
    return (<div>
        <h1>Hello World from React From JSX</h1>
    </div>
    )
}

const numberVariable = 1000

export default function App() {
    return (
        <div>
           <AppLayout/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)