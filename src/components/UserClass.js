import React from 'react'
const axios = require('axios')
import * as Constant from '../utils/constants'

export default class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            userInfo: {
                login: "John Doe",
                location: "Default",
                avatar_url:""
            }
        }
    }
    debugger;
    async componentDidMount() {
        const url = Constant.GITHUB_URL
        const data = await fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(`${JSON.stringify(data)}`)
                return data
            }).catch((error) => {
                console.log(`${JSON.stringify(error.message)}`)
            })

        this.setState({
            userInfo: data
        })

    }

    render() {

        const { login, location, avatar_url } = this.state.userInfo
        const { count } = this.state

        return (

            <div className='user-card'>

                <button onClick={() => {  this.setState({ count: this.state.count + 1 }) }}>+</button>
                <h1>Count:{count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>-</button>

                <h1>Name:{login}</h1>
                <h1>Location:{location}</h1>
                <img src={avatar_url}/>

            </div>

        )
    }

}