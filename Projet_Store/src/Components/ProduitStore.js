import React from 'react';


const ProduitStore = (props) => {
	return (
		<div className="Produit">
		<img src={props.Image} className="imageProduit" />
				<h3>
					{
						props.Nom
					}
				</h3>
				<p>
				Le Prix de cette article est de :
					{
					props.Prix +"$"
					}
				</p>
				<p>
					{
						props.Description
					}
				</p>
				<p style={{float:"right"}}>
					{
						props.Quantite
					}
				</p>
				<button value="Ajouter"/>

		</div>
	);
}

export default ProduitStore;