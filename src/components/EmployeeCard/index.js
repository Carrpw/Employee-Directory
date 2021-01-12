import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="row card">
        <ul className="content">
          <li>
            <img alt={props.name} src={props.image} />
          </li>
          <li>
            {props.name}
          </li>
          <li>
            {props.occupation}
          </li>
          <li>
            {props.location}
          </li>
        </ul>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
      𝘅
      </span>
    </div >
  );
}

export default EmployeeCard;
