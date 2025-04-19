import React, { useEffect, useState } from 'react'
import RestaurantCards from './RestaurantCards'
import './RestaurantContainer.css'
import { resList } from './Constants'
import ShimmerUi from './ShimmerUi'

const RestaurantContainer = () => {
  const [listofRestaurant , setListofRestaurant] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9117093&lng=80.1571623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json);
    console.log("datafetched",json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListofRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(listofRestaurant.length === 0){
    return <ShimmerUi/>
  }

  console.log("listofres", listofRestaurant)
  const toprated = () => {
    const filtered = listofRestaurant.filter((res) => {
      return res?.info?.avgRating > 4.2;
    });    
    setListofRestaurant(filtered);
  };
  
  return (
    <div className='restaurantr'>
      <div className='searchbar'>Search 
        <button onClick={toprated} className='btn-top' >Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {listofRestaurant.map((res) => (
            <RestaurantCards key={res.info.id} resData={res} />
          ))}
      </div>
    </div>
  )
}

export default RestaurantContainer
