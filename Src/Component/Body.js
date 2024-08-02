import RestaruntCard from "./RestaruntCard";
//import resList from "../../Utils/mockData";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../Utils/useOnlineStatus";

const Body= () => {
const [listOfRest,setListOfRes] = useState([]);
const [searchOfRest,setSearchOfRest] = useState([]);
const [searchText,setSearchText] = useState("");
useEffect(() => {
    fetchData();
   }, []);
   const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaruntList=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    const restData=restaruntList.map((res)=> {
        return res.info;
    });
    setListOfRes(restData);
    //const [searchOfRest,setSearchOfRest] = useState(listOfRest);
    setSearchOfRest(restData);
   };
   const onlineStatus = useOnlineStatus();
   if(onlineStatus === false)
    {
       return <h1> your offline. check ur internet connection !!!</h1>
    }
    
// if(listOfRest.length === 0)
// {
//     return (
//         <div className="shimmer-con">
//             <Shimmer/>
//         </div>
//     );
// }
 
console.log(listOfRest.length);
    return listOfRest.length === 0 ? <Shimmer /> : (
         <div className="body">
             <div className ="filter"> 
            <div className="search p-4 m-4">
            <input type="text" className="search-box border border-solid border-black" value={searchText} onChange = {(e)=>{
                setSearchText(e.target.value);
            }}
            />
            <button className="search-btn px-4 m-4 bg-gray-100 rounded-lg" onClick= {()=>
                {
                    const searchedRest= listOfRest.filter((res) => 
                    {
                        return res.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setSearchOfRest(searchedRest);
                }
            }
            >Search</button>
            <button className="filter-btn px-4 m-2 bg-gray-100 rounded-lg"
                onClick={() =>{
                    const filtertheRestaurant= listOfRest.filter((res)=>
                    {
                        return res.avgRating>4;
                    });
                    setListOfRes(filtertheRestaurant);
                } 
                }
             >
             Top Rated Restaurant
            </button> 
            </div>
             </div>
             <div className="res-container">
             {searchOfRest.map((restaurant) => (
                     <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
                     <RestaruntCard resData={restaurant} />
                     </Link>
             ))}
             </div>
         </div>
    )};

export default Body;