import React from 'react'
import RestaurantCards from './RestaurantCards'
import './RestaurantContainer.css'
import { resList } from './Constants'

const RestaurantContainer = () => {
  return (
    <div className='restaurantr'>
      <div className='searchbar'>Search</div>
      <div className='res-container'>
        {resList.map((restaurant) => (
          restaurant.restaurants.map((res) => (
            <RestaurantCards key={res.info.id} resData={res} />
          ))
        ))}
      </div>
    </div>
  )
}

export default RestaurantContainer
