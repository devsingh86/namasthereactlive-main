import { useState } from "react";
import "./App.css";

const Header = () => {
  const [isloggedin, setisloggedin] = useState(true);

  return (
    <div>
      <img
        style={{ width: "112px" }}
        alt="Food villa"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      ></img>

      <div style={{ textAlign: "center" }}>
        <ul
          style={{
            marginLeft: "65rem",
            listStyleType: "none",
            display: "flex",
            marginTop: "-37px",
          }}
        >
          <li style={{ paddingRight: "4px" }}>Home</li>
          <a href="/About">
            {" "}
            <li style={{ paddingRight: "4px" }}>About</li>
          </a>
          <li style={{ paddingRight: "4px" }}>Contact</li>
          <li style={{ paddingRight: "4px" }}>Cart</li>
          <div>
            {isloggedin ? (
              <button onClick={() => setisloggedin(false)}>Login</button>
            ) : (
              <button onClick={() => setisloggedin(true)}>logout</button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
