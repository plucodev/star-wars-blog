import React from "react";
import { Context } from "../store/appContext.jsx";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import PeopleCard from "../component/peopleCard.jsx";
import { Demo } from "./demo.jsx";
export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container-fluid">
							<div className="row">
								<h1>Planets</h1>

								<div className="scrolling-wrapper">
									{store.planets ? (
										<Card />
									) : (
										<div>Loading ...</div>
									)}
								</div>
							</div>
							<div className="row mt-5">
								<h1>People</h1>
								<div className="scrolling-wrapper">
									<PeopleCard />
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
// <div className="card-columns d-flex justify-content-between">
