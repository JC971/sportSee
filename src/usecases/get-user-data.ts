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
}: {
	userId: number;
}): Promise<UserDataResponse> => {
	const response = await fetch(`http://localhost:3000/user/${userId}`);

	const { data } = await response.json();
	return data;
};
