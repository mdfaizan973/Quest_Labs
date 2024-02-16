import styled from "styled-components";
import UserProfile from "./UserProfile";
import WhitePage from "./WhitePage";

export default function Mobile() {
  return (
    <DIV>
      <h3 className="profile">Profile</h3>
      <UserProfile />
      <WhitePage />
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
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
