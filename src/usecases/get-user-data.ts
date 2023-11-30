export type UserDataResponse = {
	id: number;
	userInfos: {
		firstName: string;
		lastName: string;
		age: number;
	};
	todayScore: number;
	keyData: {
		calorieCount: number;
		proteinCount: number;
		carbohydrateCount: number;
		lipidCount: number;
	};
};

// userId === 12 ou 18
export const getUserData = async ({
	userId,
}:

	{
	userId: number;
	}): Promise<UserDataResponse> => {
	try {
		const response = await fetch(`http://localhost:3000/user/${userId}`);
		if (!response.ok) {
			throw new Error(`Erreurdu réseau: ${response.status}`);
		}
			
		const { data } = await response.json();
	
		return data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données utili",
			error
		);
		throw error;
	}
	
};

