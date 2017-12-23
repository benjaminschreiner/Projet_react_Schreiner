import * as types from "./constantes.js";


const initialState = {
	items :[],
	completed: false,

};

export default function reducer ( state=initialState, action )
{
	switch(action.type)
	{
		case types.Nom_site:
			return{
				...state,
				items:[],
				completed: true,
			}
			break;
		default:
			return state;
			break;
	};
};