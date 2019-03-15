import { getMessages } from "redux/static-data";

const messages =  (state = getMessages(12), action) => {
  return state;
};

export {
  messages
}