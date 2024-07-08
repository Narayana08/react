import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { data } from './data'
import { Link } from 'react-router-dom'

export default function Body() {

    const [restaurants, setRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const fetchData = () => {
        setRestaurants(data)
        setFilteredRestaurants(data)
    }

    useEffect(fetchData, [])

    const topRatedRestaurants = () => {
        setFilteredRestaurants(restaurants.filter(restaurant => restaurant.info.avgRating > 4))
    }

    const handleInputSearch = () => {
        const filterRestaurants = restaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRestaurants(filterRestaurants)
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type='text' className='search-box' value={searchText} onChange={e => { setSearchText(e.target.value) }} />
                    <button onClick={() => handleInputSearch()}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => topRatedRestaurants()}>Top Rated Restaruants</button>
            </div>
            <div className="restaurant-container">
                {
                    filteredRestaurants.length > 0 ? filteredRestaurants.map(data => <Link key={data.info.id} to={"/restaurants/" + data.info.id}><RestaurantCard restuarantData={data.info} /></Link>) : (<Shimmer />)
                }
            </div>
        </div>
    )
}
