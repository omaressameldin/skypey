import React from "react";
import styled from 'styled-components';
import avatar from './avatar.png'

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

.Empty__name {
  color: #fff;
}

.Empty__status,
.Empty__info {
  padding: 1rem;
}

.Empty__status {
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
}

.Empty__img {
  border-radius: 50%;
  margin: 2rem 0;
  width: 128px;
  height: 128px;
}

.Empty__btn {
  padding: 1rem;
  margin: 1rem 0;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 30px;
  outline: 0;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
}
`;

const Empty = ({ user }) => {
  const { name, profile_pic, status } = user;
  const firstName = name.split(" ")[0]
  return (
    <StyledEmpty>
      <h1 className="Empty__name">Welcome, {firstName} </h1>
      <img src={profile_pic || avatar} alt={name} className="Empty__img" />
      <p className="Empty__status">
        <b>Status:</b> {status}
      </p>
      <button className="Empty__btn">Start a conversation</button>
      <p className="Empty__info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </StyledEmpty>
  );
};

export default Empty;