import * as types from "./constantes";

export function store_add_product(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.STORE_ADD_PRODUCT,
			payload
		})
	}
}

export function produit_increment(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.PRODUIT_INCREMENT,
			payload
		})
	}
}

export function produit_decrement(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.PRODUIT_DECREMENT,
			payload
		})
	}
}
