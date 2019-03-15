import React, { Component } from "react";
import styled, { css } from 'styled-components';
import { device } from 'device';


const StyledChat = styled.span`
  margin: 1rem 0;
  color: #fff;
  padding: 1rem;
  background: linear-gradient(90deg, #1986d8, #7b9cc2);
  max-width: 90%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media ${device.tablet} {
    max-width: 60%;
  }
  ${ ({isUsrMsg}) =>  isUsrMsg && css`
  margin-left: auto;
  background: #2b2c33;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  `}
`;
const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <StyledChat isUsrMsg={is_user_msg}>{text}</StyledChat>
  );
};

const StyledChats = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  margin: 0 auto;
  overflow-y: scroll;
`;
class Chats extends Component {
  render() {
    const { messages } = this.props;
    console.log(messages[0])
    return (
      <StyledChats>
        {messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </StyledChats>
    );
  }
}

export default Chats;