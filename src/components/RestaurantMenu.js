import React, { useEffect, useState } from 'react'
import { data } from './data'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

export default function RestaurantMenu() {

  const [restaurantInfo, setRestaurantInfo] = useState(null)

  const fetchMenu = async () => {
    setRestaurantInfo(data)
    return data
  }

  useEffect(() => { fetchMenu() }, [])

  if (restaurantInfo === null) <Shimmer />

  const { resId } = useParams()


  const restaurantData = data.filter(restaurant => {
    return restaurant.info.id === resId
  })


  const { name, cuisines, costForTwo, avgRating, sla: { deliveryTime } } = restaurantData[0].info

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwo}</h2>
      <ul>
        <li>{avgRating}</li>
        <li>{costForTwo}</li>
        <li>{deliveryTime} mins</li>
      </ul>
    </div>
  )
}


