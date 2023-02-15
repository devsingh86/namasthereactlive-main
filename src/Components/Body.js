import { useEffect, useState } from "react";
// import { Restaruntlist } from "../Components/Constants";
import RestaruntCard from "./RestaruntCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );

  return filterData;
}

const BodyComp = () => {
  const [searchText, setSerchText] = useState("");
  // const [searchClicked, setSerchClicked] = useState("false");

  const [Allrestaurants, setAllRestaurants] = useState([]);
  const [Filteredrestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    console.log("UseEffect calling when search text entered");
    getRestarunts();
  }, []);

  console.log(Filteredrestaurants);
  useEffect(() => {
    console.log("UseEffect");
  }, [Allrestaurants]);

  async function getRestarunts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurants(json.data.cards[2].data.data.cards);
  }
  console.log("render");
  const Shimmervar = console.log("this is shimmer variable");
  console.log("restaurants?.length", Filteredrestaurants.length);

  //This is called early retrun and if true component won't return any thing
  if (!Allrestaurants) return null;

  return Allrestaurants?.length === 0 ? (
    <div>
      <div>{Shimmervar}</div>
      <Shimmer />
    </div>
  ) : (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <input
            type="Text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSerchText(e.target.value)}
          />
          {/* <h1>{searchText}</h1> */}
          {/* <h1>{searchClicked}</h1> */}

          <button
            onClick={() => {
              const data = filterData(searchText, Allrestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>

          {/* <button
          onClick={() => {
            if (searchClicked === "true") {
              setSerchClicked("false");
            } else {
              setSerchClicked("true");
            }
          }}
        >
          Search
        </button> */}
        </div>
        {/* Using map final  */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            textOverflow: "ellipsis",
          }}
        >
          {Filteredrestaurants.map((restaurant) => {
            return (
              <RestaruntCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      </div>

      {/* <Restrocard {...Restaruntlist[0].data} />
      <Restrocard {...Restaruntlist[1].data} />
      <Restrocard {...Restaruntlist[2].data} />
      <Restrocard {...Restaruntlist[3].data} /> */}
    </div>
  );
};
export default BodyComp;
