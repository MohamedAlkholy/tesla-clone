import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing ineventory"
        bgImage="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing ineventory"
        bgImage="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing ineventory"
        bgImage="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing ineventory"
        bgImage="model-x.jpg"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftButton="order now"
        rightButton="learn more"
        bgImage="solar-panel.jpg"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftButton="order now"
        rightButton="learn more"
        bgImage="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftButton="shop now"
        rightButton=""
        bgImage="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
