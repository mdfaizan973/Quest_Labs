import styled from "styled-components";
export default function MamberShip() {
  return (
    <DIV>
      <button>Membership</button>
    </DIV>
  );
}
const DIV = styled.div`
  button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #6853f2;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;
