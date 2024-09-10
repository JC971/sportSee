import {
	UserActivity,
	UserData,
	UserAverage,
	UserGateway,
	UserPerformance,
} from "../model/user.interface";
//mapping
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

export type ActivitySession = {
	day: string;
	kilogram: number;
	calories: number;
};

export type UserActivityApi = {
	userId: number;
	sessions: ActivitySession[];
};
///////////////////////////////////////

export type PerformanceData = {
	value: number;
	kind: number;
};

export type UserPerformanceDataApi = {
	userId: number;
	kind: {
		[key: number]: string;
	};
	data: PerformanceData[];
};

///////////////////////////////////
export type AverageSessions = {
	day: number;
	sessionLength: number;
};

export type UserAverageApi = {
	userId: number;
	sessions: AverageSessions[];
};

////////////////////////////////////
export type UserPerformanceApi = {
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

// cette fonction permet de transformer l'objet reçu par le back-end vers celui qui  UserData qui le format qui nous intéresse
const mappingApiUserToUserData = (userApi: UserDataApi): UserData => {
	const todayScorePercentage = userApi.todayScore * 100;

	return {
		...userApi,
		todayScorePercentage,
	};
};

const mappingApiUserAverageSessionToUserAverageSession = (
	userApi: UserAverageApi
): UserAverage => {
	const daysAbr = ["L", "M", "M", "J", "V", "S", "D"];

	const result = userApi.sessions.map((session) => ({
		...session,
		day: daysAbr[session.day - 1],
	}));

	return {
		userId: userApi.userId,
		sessions: result,
	};
};

const mappingApiUserPerformanceToUserPerformance = (
	userApi: UserPerformanceApi
): UserPerformance => {
	const activityNameMap: { [key: number]: string } = {
		1: "Cardio",
		2: "Energie",
		3: "Endurance",
		4: "Force",
		5: "Vitesse",
		6: "Intensité",
	};

	const result = userApi.data.map((item) => {
		const newName = activityNameMap[item.kind];
		return {
			subject: newName,
			value: item.value,
		};
	});

	return {
		userId: userApi.userId,
		data: result,
	};
};

export class ApiUser implements UserGateway {
	async getUserData({ userId }: { userId: number }): Promise<UserData> {
		try {
			const response = await fetch(`http://localhost:3000/user/${userId}`);
			if (!response.ok) {
				throw new Error(`Erreur du réseau: ${response.status}`);
			}

			const { data } = await response.json();

			return mappingApiUserToUserData(data);
		} catch (error) {
			console.error("Erreur lors de la récupération des données", error);
			throw error;
		}
	}

	async getUserActivity({ userId }: { userId: number }): Promise<UserActivity> {
		try {
			const response = await fetch(
				`http://localhost:3000/user/${userId}/activity`
			);
			if (!response.ok) {
				throw new Error(`Erreur du réseau: ${response.status}`);
			}

			const { data }: { data: UserActivityApi } = await response.json();

			return data;
		} catch (error) {
			console.error(
				"Erreur lors de la récupération des données utilisateur",
				error
			);
			throw error;
		}
	}

	async getUserAverage({ userId }: { userId: number }): Promise<UserAverage> {
		try {
			const response = await fetch(
				`http://localhost:3000/user/${userId}/average-sessions`
			);
			if (!response.ok) {
				throw new Error(`Erreur du réseau: ${response.status}`);
			}
			const { data }: { data: UserAverageApi } = await response.json();

			return mappingApiUserAverageSessionToUserAverageSession(data);
		} catch (error) {
			console.error(
				"Erreur lors de la récupération des données utilisateur",
				error
			);
			throw error;
		}
	}

	async getUserPerformance({
		userId,
	}: {
		userId: number;
	}): Promise<UserPerformance> {
		try {
			const response = await fetch(
				`http://localhost:3000/user/${userId}/performance`
			);
			if (!response.ok) {
				throw new Error(`Erreur du réseau: ${response.status}`);
			}

			const { data }: { data: UserPerformanceApi } = await response.json();

			return mappingApiUserPerformanceToUserPerformance(data);
		} catch (error) {
			console.error("Erreur lors de la récupération des données ...", error);
			throw error;
		}
	}
}
