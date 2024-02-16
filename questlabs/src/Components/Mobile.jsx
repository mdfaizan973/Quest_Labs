import styled from "styled-components";
import UserProfile from "./UserProfile";
import WhitePage from "./WhitePage";
import Nav from "./Nav";
import { BiLeftArrow } from "react-icons/bi";
export default function Mobile() {
  return (
    <DIV>
      <button className="backArrow">
        <BiLeftArrow />
      </button>
      <h3 className="profile">Profile</h3>
      <UserProfile />
      <WhitePage />
      <Nav />
    </DIV>
  );
}

const DIV = styled.div`
  height: 100%;
  width: 25%;
  padding: 20px;
  margin: 0 auto;
  .profile {
    color: white;
    font-weight: bold;
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  .backArrow {
    position: absolute;
    top: 3.5%;
    left: 4.5%;
    transform: translateY(-50%);
    padding: 10px;
    margin: 0;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(7px);
    border: none;
    cursor: pointer;
    color: white;
  }
`;
