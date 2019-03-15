import React from "react";
import styled from 'styled-components';

const StyledChatWindow = styled.div`
`;

const ChatWindow = ({ activeUserId }) => {
  return (
    <StyledChatWindow>Conversation for user id: {activeUserId}</StyledChatWindow>
  );
};

export default ChatWindow;