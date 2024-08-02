import { useState ,useEffect } from "react";
import {MENU_API} from "./constants";

const useRestaruntMenu =(restId) =>{
    const [restInfo,setRestInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData =async () =>
        {
            try{
                const data = await fetch(MENU_API + restId);
            const json=data.json();
            setRestInfo(json);
            console.log(json);
            }
            catch{
                <h1>Could not able to get Swiggy API</h1>
            }
        };
        return restInfo;
}

export default useRestaruntMenu;