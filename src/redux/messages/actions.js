export const SEND_MESSAGE = 'SEND_MESSAGE'

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId,
  }
});