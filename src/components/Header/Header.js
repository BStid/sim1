import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerNav">
      {" "}
      <img
        src="https://github.com/DevMountain/simulation-1/blob/master/assets/shelfie_icon.png?raw=true"
        alt="logo"
      />{" "}
      <h1>Shelfie</h1>
      <div>
        <Link to="/">DashBoard</Link>
      </div>
      <div>
        <Link to="/addinventory">Add Product</Link>
      </div>
    </div>
  );
}
