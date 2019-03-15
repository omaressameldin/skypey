import React from "react";
import styled from 'styled-components';
import { device } from 'device';

const StyledMain = styled.main`
  flex: 1 1 0;
  background-color: rgba(25, 25, 27, 1);
  height: 100%;
`;
  const Main = () => (
    <StyledMain>
      Main Stuff
    </StyledMain>
  )

export default Main;