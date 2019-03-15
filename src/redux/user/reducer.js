import { generateUser } from "redux/static-data";

const user =  (state = generateUser(), action) => {
  return state;
};

export {
  user
}