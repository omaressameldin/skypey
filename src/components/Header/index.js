import React from "react";
import styled from 'styled-components';


const StyledHeader = styled.header`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(189, 189, 192, 0.2);
  .Header__name {
    color: #fff;
  }
  .Header__status {
    color: rgba(189, 189, 192, 1);
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