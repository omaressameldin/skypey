import { getMessages } from "redux/static-data";

const messages =  (state = getMessages, action) => {
  return state;
};

export {
  messages
}