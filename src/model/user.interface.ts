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
	todayScorePercentage: number;
	keyData: KeyData;
};

export type Session = {
	day: string;
	kilogram: number;
	calories: number;
};

export type UserActivityResponse = {
	userId: number;
	sessions: Session[];
};

export type AverageSessions = {
	day: string;
	sessionLength: number;
};

export type UserAverageResponse = {
	userId: number;
	sessions: AverageSessions[];
};

export type UserAveragePerformance = {
	userId: number;
	// ici rajouter les propriétés "custom" , si besoin d'un tableau, le mettre ici poru qu'il y est répercussion côté api et inmemory
};

export interface UserGateway {
	getUserActivity({
		userId,
	}: {
		userId: number;
	}): Promise<UserActivityResponse>;
	getUserData({ userId }: { userId: number }): Promise<UserDataResponse>;
	getUserAverage({ userId }: { userId: number }): Promise<UserAverageResponse>;
	// getUserPerformance
}
