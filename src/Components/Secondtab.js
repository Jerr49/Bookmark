// import './Secondtab.css'
import React, { useState } from "react";
import "../Components/Secondtab.css";
import tab2 from "../Assets/illustration-features-tab-1.svg";
import tab3 from "../Assets/illustration-features-tab-2.svg";

const Secondtab = () => {
    return (
      <div className="sectab">
      <div className="Search">

        <div className="tab">
          <img
            className="tabimg"
            src={tab2}
            alt=""
            width={"220px"}
            height={"150px"}
            />
          <img className="tabimg2" src={tab3} alt="" />

          <div className="tabbgrc"></div>
          <div></div>
        </div>
        <div className="Intelligent">
          <h2 className="int">Intelligent search</h2>
          <p className="search-text">
            Our powerful search feature will help you find saved <span> sites in not time at all. No need to trawl through all of </span> 
            your bookmarks.
          </p>
          <button className="More">More Info</button>
        </div>
      </div>


        <div className="bookmark">
          <h3 id="Oneclick">Bookmark in one click</h3>
          <p id="paragh">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
        </div>
    </div>
  );
};

export default Secondtab;
