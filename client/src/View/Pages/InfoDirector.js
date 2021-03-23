import React, { useEffect } from "react";
import VotingHeader from "../Components/VotingHeader";
import { useParams } from 'react-router'
import { fetchOfficerData } from '../../redux'
import { useSelector, useDispatch } from "react-redux";
import DetailsOfVoting from "../Components/DetailsOfVoting";
import CandidateMoreInfo from "../Components/CandidateMoreInfo";
import CandidateInfo from "../Components/CandidateInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function InfoDirector() {

  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchOfficerData(id));
  }, []);

  let officer = useSelector(state => state.OfficerReducer)
  let company = useSelector(state => state.CompanyReducer)
  let votingPer = [{ disApprovePer: "20%", ApprovePer: "80%" }];

  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <VotingHeader
          directorName={officer.name}
          company={company.companyName}
          backToLink={`/VoteDirectors/${id}`}
        />

        <Switch>
          <Route path="/moreInfo">
            <CandidateMoreInfo />
          </Route>
          <Route path="/VotingDetails">
            <DetailsOfVoting voting={votingPer} />
          </Route>
          <Route path="/">
            <CandidateInfo officer={officer} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}