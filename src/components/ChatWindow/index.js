import React from "react";
import styled from 'styled-components';
import Header from 'components/Header'

const StyledChatWindow = styled.div`
`;

const ChatWindow = ({ activeUser }) => {
  return (
    <StyledChatWindow>
      <Header user={activeUser} />
    </StyledChatWindow>
  );
};

export default ChatWindow;