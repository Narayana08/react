import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
import * as  Constant from '../utils/constants'

const User = () => {

    const [count, setCount] = useState(0)
    const [data, setData] = useState(null)

    async function fetchData() {
        console.log(`in useEffect`)
        const url = Constant.GITHUB_URL
        const response = await fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                return data
            }).catch((error) => {
                console.log(`${JSON.stringify(error.message)}`)
            })
        setData(response)
    }

    useEffect(() => {
        fetchData()
        return () => {
            console.log(`UnMounting the User Component`)
        }
    }, [])

    if (data === null) {
        console.log(`In shimmer`)
        return (<Shimmer />)
    }

    return (
        <div>
            {data && (
                <div className='user-card'>
                    <button onClick={() => {
                        console.log(`increment count: ${count}`)
                        setCount(count => count + 4)
                    }}>+</button>
                    <h1>Count:{count}</h1>
                    <button onClick={() => {
                        console.log(`decrement count: ${count}`)
                        setCount(count => count - 4)
                    }}>-</button>
                    <div>
                        <h1>Name:{data?.login}</h1>
                        <h1>Location:{data?.location}</h1>
                        <img src={data?.avatar_url} />
                    </div>
                </div>)}
        </div>
    )
}

export default User