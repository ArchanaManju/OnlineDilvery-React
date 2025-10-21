import { ResLogo_url } from "../utils/constant";

// this is when we need ony one prop we can use destructuring like this
// const RestaurantCard = ({resdata}) => {
//     console.log(resdata[0].info.name);
    
//     return (
//         <div className="restaurant-card">   
//             <img className="restaurant-logo" style={RestLogoStyle} alt="restaurant-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata[0].info.cloudinaryImageId}/>
//             <h3>{resdata[0].info.name}</h3>
//             <h4>{resdata[0].info.cuisines}</h4>     
//             <h4>{resdata[0].info.avgRating}</h4>
//         </div>
//     );
// }

// this is when we need multiple props we can use destructuring like this
// we use mapping to display multiple cards

const RestLogoStyle = {
    height: "80px",
    width: "150px",
   
};


const RestaurantCard = ({resdata,renderName}) => {
    // destructuring cuisines array to display as comma separated values
    const {name,cloudinaryImageId,cuisines,avgRating,sla} = resdata?.info; 

    return (
        <div className="restaurant-card m-4 p-4 w-[250px] bg-orange-200 rounded-sm hover:bg-orange-400 transition-colors duration-300">   
            <img className="restaurant-logo rounded-lg" style={RestLogoStyle} alt="restaurant-logo" src={ResLogo_url+cloudinaryImageId}/>
            <h3 className="font-bold py-2">{renderName ? renderName : name}</h3>
            <h4>{cuisines.join(', ')}</h4>     
            <h4>{avgRating} stars</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
}
export default RestaurantCard;