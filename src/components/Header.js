import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="Tesla">
        <img src="/images/logo.svg" alt="" />
      </a>
      <LeftMenu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href={car}>
              {car}
            </a>
          ))}
      </LeftMenu>
      <RightMenu>
        <a href="shop">Shop</a>
        <a href="account">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWraper>
          <CloseButton onClick={() => setBurgerStatus(false)} />
        </CloseWraper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href={car}>{car}</a>
            </li>
          ))}
        <li>
          <a href="existing">Existing Inventory</a>
        </li>
        <li>
          <a href="used">Used Inventory</a>
        </li>
        <li>
          <a href="trade-in">Trade-in</a>
        </li>
        <li>
          <a href="cypertruck">Cypertruck</a>
        </li>
        <li>
          <a href="roadaster">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  position: fixed;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 20px;
  z-index: 1;
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 10px 0 0;
  }
`;

const CustomMenu = styled(MenuIcon)``;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 250px;
  z-index: 10;
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-out;
`;

const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;
