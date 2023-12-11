export type KeyData = {
	calorieCount: number;
	proteinCount: number;
	carbohydrateCount: number;
	lipidCount: number;
};

export type UserDataResponse = {
	id: number;
	userInfos: {
		firstName: string;
		lastName: string;
		age: number;
	};
	todayScore: number;
	keyData: KeyData;
};

// userId === 12 ou 18
export const getUserData = async ({
	userId,
}: {
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
		console.error("Erreur lors de la récupération des données utili", error);
		throw error;
	}
};

export const getUserDataInMemory = (): UserDataResponse => {
	return {
		id: 12,
		userInfos: {
			firstName: "Karl",
			lastName: "Dovineau",
			age: 31,
		},
		todayScore: 0.12,
		keyData: {
			calorieCount: 1930,
			proteinCount: 155,
			carbohydrateCount: 290,
			lipidCount: 50,
		},
	};
};
