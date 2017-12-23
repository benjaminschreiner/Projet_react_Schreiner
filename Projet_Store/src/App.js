import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { count_increment } from "./Components/services/count/actions";
import { 
	store_add_product,
	produit_increment,
	produit_decrement
 } from "./Components/services/Inventaire/actions";
import StartPage from "./Components/StartPage";
import Store from "./Components/Store";
import Inventaire from "./Components/Inventaire";
import Panier from "./Components/Panier";

class App extends Component {
	state = {
		titre:"",
		completed:true,
		produit:{
			Nom:"",
			Prix:"",
			Description:"",
			Image:"",
			Quantite:"",
		},
	}

	constructor(props) {
		super(props);
		this.changeProduitValue = this._changeProduitValue.bind(this);
	}

	_changeProduitValue(donnee, valeur) {
		this.setState({
				produit:{
					...this.state.produit,
					[donnee]: valeur.target.value,
				}
			
		});
	}
	_changeTitre(e){
		this.setState({
			titre: e.target.value
		});

	}

	_changeValid(e) {
		this.setState({
			completed: false
		});
	}
	_resetProduit(){
		this.setState({
			produit:{
				Nom:"",
				Prix:"",
				Description:"",
				Image:"",
				Quantite:"",
			}
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{ this.state.titre }</h1>
				</header>
				{
					this.state.completed?
				<StartPage
					titre={this.state.titre}
					completed={this.state.completed}
					changeTitre={this._changeTitre.bind(this)}
					changeValid={this._changeValid.bind(this)}
					/>
					:
					<div className="content">
						<div className="content">

							<Store
							items={this.props.produit.items}
							/>
							<Panier/>
							<Inventaire
								produit={this.state.produit}
								Nom={this.state.produit.Nom}
								Prix={this.state.produit.Prix}
								Description={this.state.produit.Description}
								Image={this.state.produit.Image}
								Quantite={this.state.produit.Quantite}
								items={this.props.produit.items}
								changeProduitValue={this._changeProduitValue.bind(this)}
								resetProduit={this._resetProduit.bind(this)}
								store_add_product={()=>{
									this.props.store_add_product({
										Nom:this.state.produit.Nom,
										Prix:this.state.produit.Prix,
										Description:this.state.produit.Description,
										Image:this.state.produit.Image});
									}

								}
								produit_increment={this.props.produit_increment.bind(this)}
								produit_decrement={this.props.produit_decrement.bind(this)}

								/>
						</div>
					</div>
				}
							
			</div> 
		);
	}

}

const mapStateToProps = (state) => ({
	count: state.count,
	produit: state.produit,
});

const mapActionsToProps = (dispatch) => ({
	count_increment_isen: bindActionCreators(count_increment, dispatch),
	store_add_product: bindActionCreators(store_add_product, dispatch),
	produit_increment: bindActionCreators(produit_increment, dispatch),
	produit_decrement: bindActionCreators(produit_decrement, dispatch),
});

export default connect(mapStateToProps, mapActionsToProps)( App );
