import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Empty from 'components/Empty'
import Chats from 'components/Chats'
import Header from 'components/Header'
import User from 'components/User'



import avatar from'./avatar.png';

const globalStyle= {
  backgroundColor: "rgba(32, 32, 35, 1)",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif',
};

storiesOf('Empty', module)
.add('without picture', () => {
  const user = {name: "Empty Test", status: 'I am happy Empty is working'}
  return <div style={globalStyle}><Empty user={user} /></div>
})
.add('with picture', () => {
  const user = {name: "Empty Test", profile_pic: avatar, status: 'I am happy Empty is working'}
  return <div style={globalStyle}><Empty user={user} /></div>
});

storiesOf('Chats', module)
.add('default', () => {
  const messages = [
    {
      is_user_msg: false,
      number: 0,
      text: "message 1",
    },
    {
      is_user_msg: false,
      number: 1,
      text: "message 2",
    },
    {
      is_user_msg: true,
      number: 2,
      text: "message 3",
    },
    {
      is_user_msg: true,
      number: 3,
      text: "message 4",
    },
    {
      is_user_msg: false,
      number: 4,
      text: "message 5",
    },
  ]
  return <div style={globalStyle}><Chats messages={messages} /></div>
});

storiesOf('Header', module)
.add('default', () => {
  const activeUser = {
    name: "Header Test",
    profile_pic: avatar,
    status: 'I am happy Header is working',
    user_id: "testid",
  }
  return <div style={globalStyle}><Header user={activeUser} /></div>
});

storiesOf('User', module)
.add('default', () => {
  const user = {
    name: "User Test",
    profile_pic: avatar,
    status: 'I am happy User is working',
    user_id: "testid",
  }
  return <div style={globalStyle}><User onClick={action('clicked')} user={user}/></div>
});