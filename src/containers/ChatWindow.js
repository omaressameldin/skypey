import React from "react";
import styled from 'styled-components';
import messagesProvider from 'redux/messages/provider'
import Header from 'components/Header'
import Chats from 'components/Chat'



const StyledChatWindow = styled.div`
`;

const ChatWindow = ({ activeUser, messages }) => {
  const activeMessages = messages[activeUser.user_id]
  return (
    <StyledChatWindow>
      <Header user={activeUser} />
      <Chats messages={activeMessages} />
    </StyledChatWindow>
  );
};

export default messagesProvider(ChatWindow);