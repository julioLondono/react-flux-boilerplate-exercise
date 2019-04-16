import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Single extends React.Component {
	render() {
		let actualPage = this.props.match.params.theid;
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<h1 className="display-4">
									This will show the demo element:{" "}
									{
										store.demo[
											this.props.match.params.theid
										].title
									}
								</h1>
								<form>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											id="newTitle"
											placeholder="Enter New Title"
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											id="newColor"
											placeholder="Enter New Color"
										/>
									</div>
								</form>
								<button
									className="btn btn-warning btn-lg space"
									onClick={() =>
										actions.updateItem(
											actualPage,
											document.querySelectorAll(
												"input"
											)[0].value,
											document.querySelectorAll(
												"input"
											)[1].value
										)
									}>
									Update
								</button>
								<Link to="/demo">
									<button
										className="btn btn-danger btn-lg space"
										onClick={() =>
											actions.deleteItem(actualPage)
										}>
										Delete
									</button>
								</Link>
							</div>
						);
					}}
				</Context.Consumer>

				<hr className="my-4" />

				<Link to="/">
					<span
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
