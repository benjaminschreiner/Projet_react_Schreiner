import React from 'react';
import ProduitStore from './ProduitStore';

const Store= (props) => {
	return (
	<div className="Store">
		<h2 className="Store"> Store </h2>
			<div>
				{
					props.items.map((item, index) => {

						return (
							<ProduitStore
								Key={item.id}
								{...item}
								Nom={item.Nom}
								Prix={item.Prix}
								Description={item.Description}
								Image={item.Image}
								Quantite={item.Quantite}
							/>
						);

					})
				}
			</div>
	</div>
	);
}

export default Store;