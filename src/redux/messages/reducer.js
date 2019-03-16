import { getMessages } from "redux/static-data";
import { SEND_MESSAGE } from './actions'
import { keys } from 'lodash'

const messages =  (state = getMessages(12), action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = keys(allUserMsgs).length;
      console.log(allUserMsgs)
      console.log(number)
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
      }}
    default:
      return state;
  }
};

export {
  messages
}