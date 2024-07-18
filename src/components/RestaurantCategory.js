import React from 'react'
import ItemLists from './ItemLists'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const { title, itemCards } = data.card.card

  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div className='w-9/12 mx-auto my-4 bg-gray-50 shadow-lg p-4' onClick={handleClick}>
      <div className='flex justify-between cursor-pointer'>
        <span className='font-bold text-lg'>{title}({itemCards.length})</span>
        <span>⬇️</span>
      </div>
      <div>
        {showItems && <ItemLists itemCards={itemCards} />}
      </div>
    </div>
  )
}

export default RestaurantCategory