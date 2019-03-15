import React from "react";
import styled from 'styled-components';
import { device } from 'device';

const StyledUser = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;

&:hover {
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.User__pic {
  width: 50px;
  border-radius: 50%;
}
.User__details {
  display: none;
}

/* not small devices  */
@media ${device.tablet} {
  .User__details {
    display: block;
    padding: 0 0 0 1rem;
  }
  .User__details-name {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }
}
`;

const User = ({ user, onClick }) => {
  const { name, profile_pic, status } = user;
  return (
    <StyledUser onClick={onClick}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </StyledUser>
  );
};

export default User;