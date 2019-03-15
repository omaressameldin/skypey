import React from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import activeUserIdProvider from 'redux/activeUserId/provider'
import userProvider from 'redux/user/provider'
import contactsProvider from 'redux/contacts/provider'


import { device } from 'device';
import Empty from 'components/Empty'
import ChatWindow from 'components/ChatWindow'


const providers = compose(
  activeUserIdProvider,
  userProvider,
  contactsProvider,
)

const StyledMain = styled.main`
  flex: 1 1 0;
  background-color: rgba(25, 25, 27, 1);
  height: 100%;
`;

const Main = ({ user, activeUserId, contacts }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} />;
    } else {
      return <ChatWindow activeUser={contacts[activeUserId]} />;
    }
  };
  return (
    <StyledMain>
    {renderMainContent()}
  </StyledMain>
  );
};

export default providers(Main);