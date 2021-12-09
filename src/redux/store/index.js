import { createStore, applyMiddleware, compose} from "redux"; // Traigo el create store
import thunk from "redux-thunk";
import reducer from "../reducer/index";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creo store // Seteo el reducer y aplico el middleware thunk
var store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store