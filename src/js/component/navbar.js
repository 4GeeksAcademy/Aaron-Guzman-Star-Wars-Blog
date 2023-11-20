import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const removeFromFavorites = (nameToRemove) => {
		const updatedFavorites = store.favorites.filter(name => name !== nameToRemove);
		actions.updateFavorites(updatedFavorites)
	}

	return (
		<div className="header">
			<nav className="navbar">

				<div className="left">

					<Link to="/">
						<img src="https://yt3.googleusercontent.com/0FgTOtFlh29rnwRZ0MUXAkkf-aho_LMsy2NJZNuoJhrb9UayXizmhn97gQb4_tWmiLOPSsZzE2I=s900-c-k-c0x00ffffff-no-rj" className="logo" alt=""></img>
					</Link>

				</div>

				<div className="right">

					<div className="ml-auto">
						<div className="dropdown dropstart">
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								{store.favorites && store.favorites.length > 0 ? store.favorites.map((name, index) => {
									return (
										<li className="d-flex align-items-baseline" key={index}>
											<p className="dropdown-item px-3" href="#">{name}</p>
											<i onClick={() => removeFromFavorites(name)} className="fa-solid fa-trash px-3" style={{ color: "#ff000d" }}></i>
										</li>
									)
								})
									:
									<li className="d-flex align-items-baseline">
										<p className="dropdown-item px-3" href="#">Not favorite</p>

									</li>
								}

							</ul>
						</div>

					</div>
				</div>

			</nav>

		</div>
	);
};














