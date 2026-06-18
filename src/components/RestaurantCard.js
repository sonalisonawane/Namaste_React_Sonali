import {Link} from 'react-router-dom';

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantCard = (props) => {

    const { resData } = props;

    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        sla,
        areaName,
        costForTwo
    } = resData;

    return (
        <Link to={`/restaurant-menu/${resData.id}`}>
            <div className="w-60 mx-5 flex items-start flex-col overflow-visible justify-center">

            <img
                className="size-60"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />

            <h3>{name}</h3>

            <h4>{cuisines.join(", ")}</h4>

            <h4>⭐ {avgRating}</h4>

            <h4>{costForTwo}</h4>

            <h4>{areaName}</h4>

            <p>{sla?.deliveryTime} mins</p>

        </div></Link>
    );
};

export default RestaurantCard;