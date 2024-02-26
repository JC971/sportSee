import {
	UserActivityResponse,
	UserDataResponse,
	UserAverageResponse,
	UserGateway,
} from "../model/user.interface";

// Ceci est le type de ce qu'on récupère côté back-end
export type KeyData = {
	calorieCount: number;
	proteinCount: number;
	carbohydrateCount: number;
	lipidCount: number;
};

export type UserDataApi = {
	id: number;
	userInfos: {
		firstName: string;
		lastName: string;
		age: number;
	};
	todayScore: number;
	keyData: KeyData;
};

/////////////////////////////

export type Session = {
	day: number;
	sessionLength: number;
};

/*export type UserAverageResponse = {
	userId: number;
	sessions: Session[];
};*///////////////////////////////////////


// cette fonction permet de transformer l'objet reçu par le back-end vers celui qui  UserDataResponse qui le format qui nous intéresse
const mappingApiUserToUserDataResponse = (
	userApi: UserDataApi
): UserDataResponse => {
	const todayScorePercentage = userApi.todayScore * 100;

	return {
		...userApi,
		todayScorePercentage,
	};
};

export class ApiUser implements UserGateway {
	async getUserData({ userId }: { userId: number }): Promise<UserDataResponse> {
		try {
			const response = await fetch(`http://localhost:3000/user/${userId}`);
			if (!response.ok) {
				throw new Error(`Erreur du réseau: ${response.status}`);
			}

			const { data } = await response.json();

			return mappingApiUserToUserDataResponse(data);
		} catch (error) {
			console.error("Erreur lors de la récupération des données", error);
			throw error;
		}
	}

	

	async getUserActivity({
		userId,
	}: {
		userId: number;
	}): Promise<UserActivityResponse> {
		try {
			const response = await fetch(
				`http://localhost:3000/user/${userId}/activity`
			);
			if (!response.ok) {
				throw new Error(`Erreur du réseau: ${response.status}`);
			}

			const { data } = await response.json();

			return data;
		} catch (error) {
			console.error(
				"Erreur lors de la récupération des données utilisateur",
				error
			);
			throw error;
		}
	}


	async getUserAverage({
		userId,
	}: {
		userId: number;
	}): Promise<UserAverageResponse> {
		try {
			const response = await fetch(
				`http://localhost:3000/user/${userId}/average-sessions`
			);
			if (!response.ok) {
				throw new Error(`Erreur du réseau: ${response.status}`);
			}
			const data: UserAverageResponse = await response.json();

			return data;
		} catch (error) {
			console.error(
				"Erreur lors de la récupération des données utilisateur",
				error
			);
			throw error;
		}
	}
}
