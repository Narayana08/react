import { useEffect, useState } from 'react'
import RestaurantCard, { withPromotedLabel } from './RestaurantCard'
import Shimmer from './Shimmer'
import { data } from './data'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/hooks/online.status'

export default function Body() {

    const [restaurants, setRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const onlineStatus = useOnlineStatus()


    const fetchData = () => {
        const restaurantsData = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        setRestaurants(restaurantsData)
        setFilteredRestaurants(restaurantsData)
    }

    useEffect(fetchData, [])

    if (onlineStatus === false) {
        return (
            < div >
                <h1>Please Check Your Internet Connection</h1>
            </div >
        )
    }

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    const topRatedRestaurants = () => {
        setFilteredRestaurants(restaurants.filter(restaurant => restaurant.info.avgRating > 4))
    }

    const handleInputSearch = () => {
        const filterRestaurants = restaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRestaurants(filterRestaurants)
    }

    return (
        <div className="body">
            <div className="flex justify-normal ">
                <div className="p-1 m-4">
                    <input type='text' className="border border-solid border-black" value={searchText} onChange={e => { setSearchText(e.target.value) }} />
                    <button className='px-5 py-2 my-4 mx-2 bg-green-100 rounded-lg' onClick={() => handleInputSearch()}>Search</button>
                </div>
                <div className="p-1 m-4">
                    <button className="px-5 py-2 my-4 mx-2 bg-green-100 rounded-lg flex items-center" onClick={() => topRatedRestaurants()}>Top Rated Restaruants</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-around">
                {
                    filteredRestaurants.length > 0 ? filteredRestaurants.map(data => <Link key={data.info.id} to={"/restaurants/" + data.info.id}>
                        {
                            data?.info?.promoted ? <RestaurantCardPromoted restuarantData={data.info} /> : <RestaurantCard restuarantData={data.info} />
                        }
                    </Link>) : (<Shimmer />)
                }
            </div>
        </div>
    )
}
