import { IMG_ID } from "../Components/Constants";

const RestaruntCard = ({
  name,
  cloudinaryImageId,
  totalRatingsString,
  lastMileTravelString,
  cuisines,
}) => {
  //img
  // console.log("name data", props.Restarunt.data.name);
  // console.log("name data", name);
  // console.log("name data", cloudinaryImageId);
  // console.log("name data", totalRatingsString);
  // console.log("name data", lastMileTravelString);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          alignContent: "inherit",
          flexWrap: "wrap",
          marginLeft: "1rem",
          paddingTop: "1px",
          marginTop: "10px",
          border: "1px solid  black",
        }}
      >
        <h2>{name}</h2>
        <img
          style={{ width: "210px", flexWrap: "wrap" }}
          alt="Restraruntname"
          src={IMG_ID + cloudinaryImageId}
        />
        <div
          style={{
            marginTop: "-25px",
          }}
        >
          <h3 style={{ className: "h3" }}>{cuisines.join(",")}</h3>
          <h4
            style={{
              marginTop: "-18px",
              overflow: "hidden",
            }}
          >
            {totalRatingsString}
          </h4>
          <h5
            style={{
              marginTop: "-25px",
            }}
          >
            {lastMileTravelString}
          </h5>
        </div>
        {/* <img
            style={{ width: "163px" }}
            alt="BurgerKing"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl"
          />
          <div>
            <h3 style={{ margin: "1px" }}>Burger King</h3>
            <h4 style={{ margin: "1px" }}>Bangalore India</h4>
            <h5 style={{ margin: "1px" }}>4.2 Rating</h5>
          </div> */}
      </div>
    </div>
  );
};

export default RestaruntCard;
