import styled from "styled-components";
import UserProfile from "./UserProfile";

export default function Mobile() {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
  //       userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
  //       token:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
  //     },
  //   };

  //   fetch(
  //     "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));

  return (
    <DIV>
      <h3 className="profile">Profile</h3>
      <UserProfile />
    </DIV>
  );
}

const DIV = styled.div`
  height: 100vh;
  width: 25%;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 0 auto;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  .profile {
    color: white;
    font-weight: bold;
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
