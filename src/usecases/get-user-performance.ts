/*export type userPerformanceResponse = {//ok
	userId: number;
	kind: {
		1: string;
		2: string;
		3: string;
		4: string;
		5: string;
		6: string;
	};
	data: Array<{
		value: number;
		kind: number;
	}>;
};

export const getUserPerformance = async ({
	userId,
}: {
	userId: number;
}): Promise<userPerformanceResponse> => {
	try {
		const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
		if (!response.ok) {
			throw new Error(`Erreur du réseau: ${response.status}`);
		}

		const data: userPerformanceResponse = await response.json();
		return data; 
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données ...",
			error
		);
		throw error; 
	}
};

 export const getUserPerformanceInMemory = (): userPerformanceResponse => {
		return {
			userId: 12,
			kind: {
				1: "cardio",
				2: "energy",
				3: "endurance",
				4: "strength",
				5: "speed",
				6: "intensity",
			},
			data: [
				{
					value: 80,
					kind: 1,
				},
				{
					value: 120,
					kind: 2,
				},
				{
					value: 140,
					kind: 3,
				},
				{
					value: 50,
					kind: 4,
				},
				{
					value: 200,
					kind: 5,
				},
				{
					value: 90,
					kind: 6,
				},
			],
		};
 };*/

 import { userLoader } from "../main";
 import { UserPerformance } from "../model/user.interface";

 export const getUserPerformance = async ({
		userId,
 }: {
		userId: number;
 }): Promise<UserPerformance> => {
		const userData = userLoader().getUserPerformance({ userId });

		return userData;
 };
