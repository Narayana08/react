import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1", { "id": "heading" }, "Hello World from React!")

const JSXHeading = () => {
    return (<div>
        <h1>Hello World from React From JSX</h1>
    </div>
    )
}

const numberVariable = 1000

export function Header() {
    return (
        <div>
            <h2>{numberVariable}</h2>
            <JSXHeading />
            <h1>Hello World from React 2</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Header/>)