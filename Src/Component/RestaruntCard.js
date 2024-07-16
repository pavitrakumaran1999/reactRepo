import { CDN_URL } from "../../Utils/constants";

const RestaruntCard= (props) => {
    const {resData}=props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    }=resData?.data;
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img className="res-card-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};

export default RestaruntCard;