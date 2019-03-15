import React from "react";
import styled from 'styled-components';


const StyledHeader = styled.header`
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(189, 189, 192, 0.2);
.Header__name {
  color: #fff;
}
`;

function Header({ user }) {
  const { name, status } = user;
  return (
    <StyledHeader>
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </StyledHeader>
  );
}

export default Header;