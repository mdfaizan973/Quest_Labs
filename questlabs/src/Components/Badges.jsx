import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";

export default function Badges() {
  const [badges, setBadges] = useState([]);
  const [load, setLoad] = useState(false);
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

  useEffect(() => {
    fetch(
      "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setBadges(response.data);
        setLoad(true);
      })
      .catch((err) => console.error(err));
  }, []);
  // console.log(load);
  if (!load) {
    return <Loader />;
  }
  return (
    <DIV>
      <div className="main_container">
        {badges.map((ele, i) => (
          <div className="image_container" key={i}>
            <img src={ele.imageUrl} />
          </div>
        ))}
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  height: 50%;
  .main_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 90%;
    margin: auto;
    padding: 10px;
  }
  .image_container {
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
`;
