import logo from "../../assets/logo.svg";
import logoText from "../../assets/logoText.svg";
import "../../styles/topHeader.css";
//import React from 'react';
//import type { UserDataResponse } from "../get-user-data";
/*
interface TopHeaderProps {
	user: UserDataResponse | null;
}*/

const TopHeader = () => {
	return (
		
			<div className="header-container">
				<div className="logo-container">
					<img className="runner" src={logo} alt="" />
					<img className="logo-title" src={logoText} alt="" />
				</div>
				
					<ul>
						<a  href= "/"> Accueil</a>
						<a href="#"> Profil</a>
						<a href="#"> Réglage</a>
						<a href="#"> Communauté</a>
					</ul>
				
			</div>
		
	);
};

export default TopHeader;
