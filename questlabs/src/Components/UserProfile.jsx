import { useState } from "react";
import styled from "styled-components";
export default function UserProfile() {
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");

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
      console.log(response);
      setImgUrl(response.data.imageUrl);
      setName(response.data.name);
    })
    .catch((err) => console.error(err));
  return (
    <DIV>
      <div className="main_container">
        <div className="img_cont">
          <div className="img_cont2">
            <img src={imgUrl} />
          </div>
        </div>
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  .main_container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    position: sticky;
  }
  .img_cont {
    width: 27%;
    height: 27%;
    border-radius: 50%;
    padding: 2px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: white;
  }
  .img_cont2 {
    border-radius: 50%;
    background-color: #ff4155;
  }
  .main_container img {
    width: 100%;
  }
`;
