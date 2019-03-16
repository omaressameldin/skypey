import React, { Component } from "react";
import styled from 'styled-components';
import { compose } from 'redux';
import messagesProvider from 'redux/messages/provider'
import activeUserIdProvider from 'redux/activeUserId/provider'

const providers = compose(
  messagesProvider,
  activeUserIdProvider,
)


const StyledMessageInput= styled.form`
  width: 80%;
  margin: 1rem auto;
  .Message__input {
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    border: 0;
    border-radius: 10px;
    font-size: 1rem;
    outline: 0;
  }
`;

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
       value: ""
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();

    const { sendMessage, activeUserId } = this.props;
    const { value } = this.state;
    sendMessage(value, activeUserId);
    this.setState({
      value: "",
    })
  };

  render() {
    const { value } = this.state;

    return(
    <StyledMessageInput onSubmit={this.handleSubmit}>
      <input
        className="Message__input"
        onChange={this.handleChange}
        value={value}
        placeholder="write a message"
      />
    </StyledMessageInput>
    )
  }
}

export default providers(MessageInput);