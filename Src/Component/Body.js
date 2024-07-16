import RestaruntCard from "./RestaruntCard";
import resList from "../../Utils/mockData";
import { useState } from "react";

const Body= () => {

const [listOfRest,setListOfRes] = useState(resList);
    return(
         <div className="body">
             <div className ="search"> 
             <button className="filter-btn"
                onClick={() =>{
                    const filtertheRestaurant= listOfRest.filter((res)=>
                    {
                        return res.data.avgRating>4;
                    });
                    setListOfRes(filtertheRestaurant);
                } 
                }
             >
             Top Rated Restaurant
            </button> 
             </div>
             <div className="res-container">
             {listOfRest.map((restaurant) => (
                     <RestaruntCard key={restaurant.data.id} resData={restaurant} />
             ))}
             </div>
         </div>
    )};

export default Body;