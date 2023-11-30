import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logoText from "../../assets/logoText.svg";
import "../../styles/topHeader.css";
import React from 'react';
import type { UserDataResponse } from "../get-user-data";

interface TopHeaderProps {
	user: UserDataResponse | null;
}

const TopHeader: React.FC<TopHeaderProps> = () => {
	return (
		<div>
			<div className="header-container">
				<div className="logo-container">
					<img className="runner" src={logo} alt="" />
					<img className="logo-title" src={logoText} alt="" />
				</div>
				<h1>hello</h1>
					<ul>
						<Link to="/"> Accueil</Link>
						<Link to="#"> Profil</Link>
						<Link to="#"> Réglage</Link>
						<Link to="#"> Communauté</Link>
					</ul>
				
			</div>
		</div>
	);
};

export default TopHeader;
