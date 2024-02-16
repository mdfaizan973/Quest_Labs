import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader";
export default function Points() {
  const [points, setPoints] = useState([]);
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
      "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-history?page=1&limit=20",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPoints(response.data);
        setLoad(true);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(points);

  if (!load) {
    return <Loader />;
  }
  return (
    <DIV>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {points.map((ele, i) => (
            <tr key={i}>
              <td>{ele.title}</td>
              <td>{ele.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DIV>
  );
}
const DIV = styled.div`
  overflow-x: auto;
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }
  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
`;
