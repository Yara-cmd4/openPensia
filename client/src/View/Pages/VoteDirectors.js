import React from "react";
import Header2 from "../Components/CompanyHeader";
import MainButton from "../Components/MainButton";
import DirectorListItem from "../Components/DirectorsListItem";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import Arrow from "../Components/Arrow";

let directors_lst = [
  { name: "a", photo: "a" },
  { name: "b", photo: "b" },
  { name: "c", photo: "c" },
];

export default function VoteDirectors() {
  return (
    <div>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <Header2
          percent="18.3%"
          question="תבחרו מי יהיו הדירקטורים"
          company="בנק הפועלים"
        />

        <div>
          <p>בחר/י שני דירקטורים רגילים</p>

          {directors_lst.map((elm) => {
            return (
              <div>
                <DirectorListItem
                  logo={"https://picsum.photos/200"}
                  name={elm.name}
                  link={`InfoDirector/${elm.id}`} //need to add proper id
                />
              </div>
            );
          })}
        </div>
        <MainButton text="שלח/י את ההצבעה שלי" />
      </div>
    </div>
  );
}
