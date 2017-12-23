import React from 'react';


const Produit = (props) => {
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
			<ul>
				<li><input type="button" value="Ajouter"  onClick={props.produit_increment}/></li>
				<li><input type="button" value="Retirer"  onClick={props.produit_decrement}/></li>
				<li><input type="button" value="Modifier" /></li>
				<li><input type="button" value="Supprimez" /></li>
			</ul>
		</div>
	);
}

export default Produit;