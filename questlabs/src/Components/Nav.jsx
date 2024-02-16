import styled from "styled-components";
import { FiHome, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

export default function Nav() {
  return (
    <Navbar>
      <ul>
        <li>
          <FiHome />
        </li>
        <li>
          <FiSearch />
        </li>
        <li>
          <FiShoppingBag />
        </li>
        <li>
          <FiUser />
        </li>
      </ul>
    </Navbar>
  );
}
const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  z-index: 1000;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0 10px;
    font-size: 1.2em;
    cursor: pointer;
  }
  li:hover {
    font-weight: bold;
    color: black;
  }
`;
