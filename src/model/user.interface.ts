export type KeyData = {
	calorieCount: number;
	proteinCount: number;
	carbohydrateCount: number;
	lipidCount: number;
};

export type UserData = {
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

export type UserActivity = {
	userId: number;
	sessions: Session[];
};

export type AverageSessions = {
	day: string;
	sessionLength: number;
};

export type UserAverage = {
	userId: number;
	sessions: AverageSessions[];
};

export type UserPerformanceData = {
	value: number;
	subject: string;
};

export type UserPerformance = {
	userId: number;
	data: UserPerformanceData[];
};

export interface UserGateway {
	getUserActivity({ userId }: { userId: number }): Promise<UserActivity>;
	getUserData({ userId }: { userId: number }): Promise<UserData>;
	getUserAverage({ userId }: { userId: number }): Promise<UserAverage>;
	getUserPerformance({ userId }: { userId: number }): Promise<UserPerformance>;
}
