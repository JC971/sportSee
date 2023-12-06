/*
import { useState, useEffect } from "react";
import { getUserData, UserDataResponse } from "../get-user-data";
import React from "react";

interface LastNameIdentProps {
	userId: number;
	userData: UserDataResponse | null;
}

const LastNameIdent: React.FC<LastNameIdentProps> = ({ userId }) => {
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData: UserDataResponse = await getUserData({ userId });
				setLastName(userData.userInfos.lastName);
				
			} catch (error) {
				console.error(
					"Erreur lors de la récupération des données utilisateur",
					error
				);
			}
		};

		fetchData();
	}, [userId]);

	return (
		<div>
			<h2>Last Name: {lastName}</h2>
		</div>
	)
};
console.log('tototooeri')
export default LastNameIdent;
*/


import React from "react";
import "../../styles/firstName.scss";

interface FirstNameIdentProps {
	firstName: string;
	
}

const FirstNameIdent: React.FC<FirstNameIdentProps> = ({ firstName }) => {
	
	return (
		
			<div className="welcome-container">
				<h1>
					<span> Bonjour </span> {firstName}
				</h1>
				<div className="tagline">
					Félicitation ! Vous avez explosé vos objectifs hier 👏
				</div>
			</div>
		
	);
};

export default FirstNameIdent;
