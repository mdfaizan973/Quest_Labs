import { useState } from "react";
import styled from "styled-components";
export default function WhitePage() {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");
  const [level, setLevel] = useState("");
  const [rank, setRank] = useState("");
  // getting name data name
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
      userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
    },
  };

  fetch(
    "https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //   console.log(response);
      setName(response.data.name);
    })
    .catch((err) => console.error(err));
  //  gettign level and points data

  fetch(
    "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //   console.log("response", response);
      setPoints(response.xpThreshold);
      setLevel(response.tier);
    })
    .catch((err) => console.error(err));

  //getting rank

  fetch(
    "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      setRank(response.data.position);
    })
    .catch((err) => console.error(err));
  return (
    <DIV>
      <div className="name_cont"></div>
      <h2>{name}</h2>

      <div className="cards">
        <div className="child_card">
          <p> {points}</p>
          <p> Points</p>
        </div>
        <div className="child_card">
          <p> #{rank}</p>
          <p>Rank</p>
        </div>
        <div className="child_card">
          <p>{level}</p>
          <p>Level</p>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  width: 98%;
  height: 80%;
  margin: auto;
  border-radius: 15px;
  background-color: white;
  margin-top: -50px !important;
  .name_cont {
    height: 60px;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .cards {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
  }
  .child_card {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: #6853f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .child_card p:nth-child(1) {
    font-size: 1.8rem;
    font-weight: bold;
    padding: 2px;
  }
`;
