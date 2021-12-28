import React from "react";

import styled from "styled-components";
// import MenuIcon from "@mui/icons-material/Menu";
import Fade from "react-reveal/Fade";

function Section({ title, description, leftButton, rightButton, bgImage }) {
  return (
    <Wrap bgImage={bgImage}>
      <Fade bottom>
        <SectionHeader>
          <h1>{title}</h1>
          <p>{description}</p>
        </SectionHeader>
      </Fade>
      <SectionFooter>
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftButton}</LeftButton>
          </Fade>
          {rightButton && (
            <Fade right>
              <RightButton>{rightButton}</RightButton>
            </Fade>
          )}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </SectionFooter>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SectionHeader = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const SectionFooter = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  width: 256px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin: 20px;
  height: 40px;
  animation: animateArrow infinite 1.5s;
`;
