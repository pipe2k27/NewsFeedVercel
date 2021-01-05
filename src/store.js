import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// utilidad para ver las acciones realizadas

const storeFactory = () => createStore(rootReducer, applyMiddleware(thunk));

export default storeFactory;
