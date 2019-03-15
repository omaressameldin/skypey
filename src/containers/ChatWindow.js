import React from "react";
import styled from 'styled-components';
import { values } from 'lodash';
import messagesProvider from 'redux/messages/provider'
import Header from 'components/Header'
import Chats from 'components/Chats'



const StyledChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ChatWindow = ({ activeUser, messages }) => {
  const activeMessages = messages[activeUser.user_id]
  return (
    <StyledChatWindow>
      <Header user={activeUser} />
      <Chats messages={values(activeMessages)} />
    </StyledChatWindow>
  );
};

export default messagesProvider(ChatWindow);