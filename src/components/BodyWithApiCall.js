import React, { use, useContext, useEffect, useState } from "react";
import RestaurantCard, {withHighRating} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/hooks/useOnlineStatus'
import LoggedInUserContext from "../utils/LoggedInUserContext.js";

const Body = () => {
    // We are learning how to update the list of restaurants on button click
    // we will filter the resturants which are having rating > 4
    // const topRatedResturants = resObj.filter((restaurant) => restaurant.info.avgRating > 4);
    // console.log(topRatedResturants);
    // this is example list 
    // if we use let we can reassign but when printing it will not reflect or updat eth changes in ui 
    // to reflect the changes in ui we need to use state variable
//     let ListOfResturants = [{info: {
//         id: "303248",
//         name: "Theobroma",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/2d56f814-bab2-4110-ab76-af0f682045d1_303248.JPG",
//         cuisines: ["Desserts", "Bakery", "Beverages"],
//         avgRating: 4.6,
    
// }},{ info:{
//         id: "303948",
//         name: "KFC",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/2d56f814-bab2-4110-ab76-af0f682045d1_303248.JPG",
//         cuisines: ["Desserts", "Bakery", "Beverages"],
//         avgRating: 3.6,
// }},
// { info:{
//         id: "303908",
//         name: "KFC",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/2d56f814-bab2-4110-ab76-af0f682045d1_303248.JPG",
//         cuisines: ["Desserts", "Bakery", "Beverages"],
//         avgRating: 4.0,
// }}]


/***
 * Whenever state variable is updated react triggers re conciliation cylce / or rerenders the compoenet 
 * so entier header and body is rerendered..
 * so when i am typing "cafe" it would have re rendered 4 times
 * react will find the diffrence between virtual dom and real dom and will update only that part in real dom
 */

const [listOfResturants, setListOfResturants] = useState([]);
const [loading, setLoading] = useState(true);
const [searchText, setSearchText] = useState("");
const [filterRes, setfilterRes] = useState([]);
// to demonstrate use of context provider and consumer
const { user, setUser } = useContext(LoggedInUserContext);


const RestaurantWithHighRating = withHighRating(RestaurantCard)
 // this compoent is re rendered after this useEffect is called
 // we will ftech the data from api inside useEffect
useEffect(() => {
   fetchData()
}, []);
// fetch is a inbuild function which is used to ftech data from api and it return promise
// async await is used to handle promise
// When we call this we get Cors error in brower we can hadle the by disabling cors in chrome 


const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" );
    // converting the data to json format
    const json = await data.json();
    // using ? to check if the object is present or not to avoid undefined error
    //  optional chaining 
    const apiData= (json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfResturants(apiData)
    // we will use this to maintain the original list of resturants so filter will happen only on this data
    // why we ened to add api value []  for filterRes?  , beacuse we are using this to dispaly in UI if we dont give defult value it will show emapty as set in useState when we load first time 
    setfilterRes(apiData)
     setLoading(false);
}


// use this for custom hook for fetch 
// const {listOfResturants,filterRes,loading} = useResturantList()

const onlineStatus = useOnlineStatus()

if (onlineStatus === false ){
    return <h1>Looks like your internet is down!! Please come back owhen netwrok is back </h1>
}

if (loading) {
   // do Shimmer ui instead of showing loading 
    return <Shimmer/>
}
// conditional rendering
if (listOfResturants.length === 0) {
    return <h1>No restaurants found</h1>
}
    return listOfResturants.length === 0? <h1>No restaurants found</h1> : (
        <div className="body">
            <div className="flex m-4 p-4 items-center gap-4">
                <div className="search flex items-center ">
                <input type="text" className="search-box border-2 placeholder-gray-400 rounded-sm " placeholder="Search for restaurants" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                <button className="search-btn ml-2 px-4  border-2 bg-orange-100 rounded-sm"
                onClick={()=> {
                    const filteredList = listOfResturants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    // By doing this we are updating the state variable ListOfResturants
                    // and the dom will be update with new list
                    // now if we try to search again it will search in the filtered list == This is BUG
                    // so we need to maintain the original list also
                    // use diffent state variable to maintain original list
                    setfilterRes(filteredList);
                }}>Search</button>
            </div>
                <button
                    className="bg-orange-100 h-7 px-4 rounded-sm border-2"
                    onClick={() => {
                        const filteredList = listOfResturants.filter(
                            (restaurant) => restaurant.info.avgRating > 4
                        );
                        setListOfResturants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>

                <div className="search ml-4 font-bold">
              
                    <label className="px-2">UserName:</label>
                          <input className="border border-black p-2" 
                          value={user?.name || ''}
                          onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}></input>
                </div>
            </div>

            
            <div className="restaurant-list" style={{ display: "flex", flexWrap: "wrap" }}>
                {filterRes.map((restaurant) => (
                restaurant.info.avgRating < 4.5 ?(<RestaurantCard 
                className='flex-wrap'
                key={restaurant.info.id}
                resdata={restaurant}
                renderName={
                 <Link to={`/restaurant/${restaurant.info.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {restaurant.info.name}
                 </Link>
      }
    />):(<RestaurantWithHighRating  key={restaurant.info.id} resdata={restaurant}/>)
  ))}
            </div>
        </div>
    );
};

export default Body;