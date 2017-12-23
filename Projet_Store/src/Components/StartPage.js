import React from 'react';


const StartPage= (props) => {
	return (
		<div>
			<input
				type="text"
				placeholder={"Entrer un Nom pour le site "}
				value={props.titre}
				onChange={props.changeTitre}
			/>
			<button
				onClick={props.changeValid} 
			>
				Test
			</button>
		</div>
	);
}

export default StartPage;