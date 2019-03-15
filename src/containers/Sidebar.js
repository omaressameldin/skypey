import React from "react";
import styled from 'styled-components';
import { device } from 'device';
import { compose } from 'redux';
import contactsProvider from 'redux/contacts/provider'
import activeUserIdProvider from 'redux/activeUserId/provider'
import User from "components/User";

const providers = compose(
  contactsProvider,
  activeUserIdProvider,
)

const StyledSidebar = styled.aside`
  width: 80px;
  background-color: rgba(32, 32, 35, 1);
  height: 100%;
  border-right: 1px solid rgba(189, 189, 192, 0.1);
  transition: width 0.3s;
  overflow-y: scroll;
  @media ${device.tablet} {
    width: 320px;
  }
`;
const Sidebar = ({ contacts, setActiveUserId }) => {
  return (
  <StyledSidebar>
    {
      contacts.map(contact => <User onClick={() => setActiveUserId(contact.user_id)} user={contact} key={contact.user_id} />)
    }
  </StyledSidebar>
  );
};

export default providers(Sidebar);