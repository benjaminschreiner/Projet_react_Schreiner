import {
	combineReducers
} from "redux";


import count from "./count/reducer";
import produit from "./Inventaire/reducer";
export default combineReducers({
		count,
		produit

	});

