import React from "react";

// function to return html form of each data object
function Comp({ object }) {
  // INitializing required svgs
  const launch = object.launch_success ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
    >
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
    </svg>
  );

  const land = object.rocket.first_stage.cores.some((rocket) => {
    return rocket.land_success;
  }) ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
    >
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
    </svg>
  );

  // final object's html form
  return (
    <li>
      <div className="flight_number">
        <span className="bold">Flight Number : </span>
        {object.flight_number}
      </div>
      <div className="mission_name">
        <span className="bold">Mission Name : </span>
        {object.mission_name}
      </div>
      <div className="success">
        <div>
          <span className="bold">Launch Success : </span>
          {launch}
        </div>
        <div>
          <span className="bold">Land Success : </span>
          {land}
        </div>
      </div>
      <div className="rocket">
        <div>
          <span className="bold">Rocket</span>
        </div>
        <div>
          <span className="bold">Name : </span>
          {object.rocket.rocket_name}
        </div>
        <div>
          <span className="bold">Type : </span>
          {object.rocket.rocket_type}
        </div>
      </div>
      <div className="launchdetails">
        <div>
          <span className="bold">Launch details (utc)</span>
        </div>
        <div>
          <span className="bold">Date : </span>
          {object.launch_date_utc.split("T")[0]}
        </div>
        <div>
          <span className="bold">Time : </span>
          {object.launch_date_utc.split("T")[1].slice(0, -5)}
        </div>
      </div>

      {/* Had decided to use this button to expand and show more details, but dropped the idea for now. We could do that by one 
      more state if that state for every list object is true than displaying its expanded version. We also need to check while 
      changing state from false to true that if other state is true than making it false to not make over crowded.
      */}
      <div className="expand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </div>
    </li>
  );
}

export default Comp;
