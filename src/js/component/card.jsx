import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

import "../../styles/card.css";

export default class Card extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.planets.map((item, index) => {
						return (
							<div className="card mr-2" key={index}>
								<img
									className="card-img-top"
									src="https://via.placeholder.com/200"
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">
										{"Name :" + item.name}
									</h5>
									<p className="card-text">
										{"Population :" + item.population}
									</p>
									<p className="card-text">
										{"Terrain :" + item.terrain}
									</p>
								</div>
								<div className="card-footer">
									<Link
										to="#"
										className="btn btn-primary mr-3">
										Learn More
									</Link>
									<Link to="#" className="btn btn-warning">
										<i className="far fa-heart" />
									</Link>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
