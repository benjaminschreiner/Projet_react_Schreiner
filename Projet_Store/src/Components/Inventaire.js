import React from 'react';
import Produit from "./Produit";

const Inventaire= (props) => {
	return (
		<div className="Inventaire">
			<h2>Inventaire</h2>
			<form onReset={props.refreshProduit} >
				<input
					type="text"
					placeholder={"Nom du produit "}
					value={props.Nom}
					onChange={(e) =>props.changeProduitValue("Nom",e)}
				/>
				<input
					type="number"
					placeholder={"Prix "}
					value={props.Prix}
					onChange={(e) =>props.changeProduitValue("Prix", e)}
				/>
				<input
					type="text"
					placeholder={"Description "}
					value={props.Description}
					onChange={(e) => props.changeProduitValue("Description", e)}
				/>

				<input
					type="text"
					placeholder={"URL Image "}
					value={props.Image}
					onChange={(e) => props.changeProduitValue("Image",e)}
				/>
			<input type="reset"
				onClick= {props.store_add_product}
				value="Ajouter"
			/>
		</form>

			<div>
				{
					props.items.map((item, index) => {

						return (
							<Produit
								Key={item.id}
								{...item}
								Nom={item.Nom}
								Prix={item.Prix}
								Description={item.Description}
								Image={item.Image}
								Quantite={item.Quantite}
								produit_increment={()=>props.produit_increment(item)}
								produit_decrement={()=>props.produit_decrement(item)}
							/>
						);

					})
				}
			</div>
		</div>

	)
}

export default Inventaire;