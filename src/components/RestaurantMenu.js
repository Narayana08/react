import React, { useEffect, useState } from 'react'
import { data } from './data'
import { categoryData } from './Swiggy.data'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import RestaurantCategory from './RestaurantCategory'

export default function RestaurantMenu() {

  const [restaurantInfo, setRestaurantInfo] = useState(null)
  const [showIndex, setShowIndex] = useState(null)

  const { resId } = useParams()

  const fetchMenu = async () => {
    const restaurantsData = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    setRestaurantInfo(restaurantsData)
  }

  useEffect(() => { fetchMenu() }, [])

  { if (restaurantInfo === null) return (<Shimmer />) }

  const restaurantData = restaurantInfo.filter(restaurant => {
    return restaurant.info.id === resId
  })

  const { name, cuisines, costForTwo } = restaurantData[0].info


  const categories = categoryData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => {
    return c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwo}</p>
      {
        categories.map((restaurant, index) => (<RestaurantCategory key={index} data={restaurant} setShowIndex={() => setShowIndex(index)} showItems={index === showIndex} />))
      }
    </div>
  )
}


