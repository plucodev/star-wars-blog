import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import { Demo } from "./demo.jsx";
export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="card-columns d-flex justify-content-between">
						<Card />
					</div>
					<div>hjkygkjgfjhfgjlgffl</div>
					<div className="card-columns d-flex justify-content-between">
						Planets
					</div>
				</div>
			</div>
		);
	}
}
