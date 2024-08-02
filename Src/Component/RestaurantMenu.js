import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaruntMenu from "../../Utils/useRestaruntMenu";

import Shimmer from "./Shimmer";

const RestaurantMenu=() =>{
    //const [ restInfo,setRestInfo] = useState(null);
    const {restId} = useParams();

    const restInfo=useRestaruntMenu(restId);
    // useEffect(()=>{
    //     fetchMenu()
    // },[]);
    
    // const fetchMenu = async () =>{
    //     try{
    //         const data=await fetch(
    //             MENU_API + restId);
    //         const json=await data.json();
    //         console.log("SampleData");
    //         console.log(json);
    //         setRestInfo(json);
    //     }
    //     catch
    //     {
    //         <h1>Could not able to get Swiggy API</h1>
    //     }
    // }
    if (restInfo === null) return  <Shimmer />
    console.log(restInfo);
   const {text} =restInfo?.data?.cards[0]?.card?.card;
   const {cuisines,costForTwoMessage,avgRatingString}=restInfo?.data?.cards[2].card?.card?.info;
   const {itemCards}=restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
   console.log(restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name);
    return (
        <div className="menu">
            <h1>{text}</h1>
            <p>{costForTwoMessage} - {cuisines.join(", ")}</p>
            <p>{avgRatingString}</p>

            <ul>
                {itemCards.map( item => (
                    <li key = {item?.card?.info?.id }>
                    {item?.card?.info?.name} - {"Rs "}
                    {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;