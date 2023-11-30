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
