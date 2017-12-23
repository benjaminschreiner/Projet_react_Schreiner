import * as types from "./constantes.js";


const initialState = {
	items:[],
	};


export default function reducer ( state=initialState, action )
{
	switch(action.type)
	{
		case types.STORE_ADD_PRODUCT:
			var {items} = state;

			items.push(
				{
					id: Date.now(),
					Nom: action.payload.Nom,
					Prix: action.payload.Prix,
					Description: action.payload.Description,
					Image: action.payload.Image,
					Quantite: 0,
				}
			);

			return {
				...state,
				items
			};
			break;

		case types.PRODUIT_INCREMENT:
			var {items}=state;
			var indexItems=items.findIndex((obj) => obj.id == action.payload.id);
			items[indexItems].Quantite ++;
			
			
			return {
				...state,
				items
			};
			break;

		case types.PRODUIT_DECREMENT:
			var {items}=state;
			var indexItems=items.findIndex((obj) => obj.id == action.payload.id);
			items[indexItems].Quantite -- ;
			if (items[indexItems].quantity <= 0) {
				items[indexItems].quantity = 0;
			}
			
			return {
				...state,
				items
			};
			break;

			default:
		return state;

	}
};