import React from "react";
import Card from "./Card";
import "./Card.css";
import stafflist from "./Stafflist";

function cardcomponent(staff, i) {
    return (
      <Card
        key={staff.key}
        image={staff.image}
        name={staff.name}
        position={staff.position}
      />
    );
  }
  
  function Tutoriallist() {
    return (
      <div>
        <div className="row">
          {stafflist.map((staff, i) => cardcomponent(staff, i))}
        </div>
        <button className="see-all-button">See All Tutorials</button>
       
      </div>
    );
  }
  
  export default Tutoriallist;
  