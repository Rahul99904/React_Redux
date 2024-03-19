import { createStore } from "redux";
import Rotate_reducer from "../Reducers/Rotate_reducer";

function configureStore(state = { rotating: false }) {
  return createStore(Rotate_reducer,state);
}

export default configureStore;