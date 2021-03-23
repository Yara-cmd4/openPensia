import "./MainNavBar.css";
import { Link, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import DetailsOfVoting from "../Components/DetailsOfVoting";
// import CandidateMoreInfo from "../Components/CandidateMoreInfo";
// import CandidateInfo from "./CandidateInfo";
// import React, { useState } from "react";



function MainNavBar({ navTabs }) {

  // const [navTabs1, setnavTabs1] = useState(navTabs);

  function setNavActive(e) {
    const closestLi = !!e.target && e.target.closest("li");
    console.log(closestLi);
    var tabs = document.querySelectorAll(".all-tabs ul li");
    !!tabs && tabs.forEach((element) => {
      !!element.classList && element.classList.remove("active-nav");
    });
    !!closestLi && !!closestLi.classList && closestLi.classList.add("active-nav");
  }

  return (
<<<<<<< HEAD
    <nav className="all-tabs">
      <ul>
        {navTabs.map(({ id, toLink, content }) => {
          return (
            <Link key={id} to={toLink} onClick={setNavActive}>
              <li >{content}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
=======
    <Router>
      <div>
        <nav className="all-tabs">
          <ul id="ul1">
            {navTabs1.map(({ id, className, href, content }, index) => {
              return (
                <li id="li1" key={index} className={className}>
                  <Link
                    to={`/${href}`}
                    onClick={(id) => {
                      setNavActive(id);
                    }}
                  >
                    {content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Switch>
          <Route path="/moreInfo">
            <CandidateMoreInfo />
          </Route>
          <Route path="/VotingDetails">
            <DetailsOfVoting voting={votingPer} />
          </Route>

          <Route path="/">
            <CandidateInfo />
          </Route>
        </Switch>
      </div>
    </Router>
>>>>>>> Dashboard_Team
  );
}

export default MainNavBar;
