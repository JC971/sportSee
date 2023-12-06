export type UserActivityResponse = {
	userId: number;
	sessions: Array<{
		day: string;
		kilogram: number;
		calories: number;
	}>;
};
export const getUserActivity = async ({
	userId,
}: {
	userId: number;
}): Promise<UserActivityResponse> => {
	try {
		const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
		if (!response.ok) {
			throw new Error(`Erreur du réseau: ${response.status}`);
		}

		const  data : UserActivityResponse = await response.json();

		return data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données utilisateur",
			error
		);
		throw error;
	}
};

export const getUserActivityInMemory = (): UserActivityResponse => {
	return {
		userId: 12,
		sessions: [
			{
				day: "2020-07-01",
				kilogram: 80,
				calories: 240,
			},
			{
				day: "2020-07-02",
				kilogram: 80,
				calories: 220,
			},
			{
				day: "2020-07-03",
				kilogram: 81,
				calories: 280,
			},
			{
				day: "2020-07-04",
				kilogram: 81,
				calories: 290,
			},
			{
				day: "2020-07-05",
				kilogram: 80,
				calories: 160,
			},
			{
				day: "2020-07-06",
				kilogram: 78,
				calories: 162,
			},
			{
				day: "2020-07-07",
				kilogram: 76,
				calories: 390,
			},
		],
	};
}
