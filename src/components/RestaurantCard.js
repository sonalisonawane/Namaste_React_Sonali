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
    } = resData;

    return (
       
            <div className="mx-5 flex items-start flex-col overflow-visible justify-center">

            <img
                className="w-full h-51.25 object-cover rounded-2xl "
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />

            <h3 className='text-[18px] font-bold'>{name}</h3>
            <h4>⭐ {avgRating} ⏳{sla?.slaString}</h4>
            <h4 className="overflow-hidden font-[Gilroy] text-gray-500/100 text-[16px]">{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            </div>
    );
};

export const withDiscountInfo = (RestaurantCard) => {
    return (props) => {
      const { resData } = props;  
      const { header , subHeader} = resData?.aggregatedDiscountInfoV3;
      return (
        <>
          <div className="relative rounded-2xl overflow-hidden">
            
            {header && (
            <div className="absolute w-70.5 my-0 mx-auto left-0 right-0 bg-linear-to-t from-black/80 to-transparent px-3 py-2">
              <span className="text-white font-bold text-sm">
                {header}
                {subHeader && ` ${subHeader}`}
              </span>
            </div>
          )}
          <RestaurantCard resData={resData} /> 
          </div>
           
        </>
      );
    };
  };

          
       
export default RestaurantCard;