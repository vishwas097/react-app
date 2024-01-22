import { REST_LOGO } from '../utils/constants';

const ResturantCard = (props) => {
    // const { resData } = ;
    const { name, cuisines, avgRating, costForTwo } = props.resData.info;
    return (
      <div className="resturant-card">
        <img
          className="resturant-logo"
          src={REST_LOGO + props.resData.info.cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h5 className='resturant-cuisines'>{cuisines?.join(", ")}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{costForTwo}</h5>
      </div>
    );
  };

  export default ResturantCard;