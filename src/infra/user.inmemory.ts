import {
	UserActivityResponse,
	UserDataResponse,
	UserAverageResponse,
	UserGateway,
} from "../model/user.interface";
//import { UserAverageResponse } from "./user.api";

// c'est la class de mock (même si ici on appel ça un fake), elle implémente l'interface UserGateway qui permet
// de vérifier qu'il y a bien les bonnes méthodes et les bons objets en retour
export class InMemoryUser implements UserGateway {
	getUserActivityInMemory({
		userId,
	}: {
		userId: number;
	}): Promise<UserActivityResponse> {
		throw new Error("Method not implemented.");
	}
	getUserData({ userId }: { userId: number }): Promise<UserDataResponse> {
		return Promise.resolve({
			id: 12,
			userInfos: {
				firstName: "Karl",
				lastName: "Dovineau",
				age: 31,
			},
			todayScore: 0.12,
			todayScorePercentage: 12,
			keyData: {
				calorieCount: 1930,
				proteinCount: 155,
				carbohydrateCount: 290,
				lipidCount: 50,
			},
		});
	}
	getUserActivity({
		userId,
	}: {
		userId: number;
	}): Promise<UserActivityResponse> {
		return Promise.resolve({
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
		});
	}
	getUserAverage({ userId }: { userId: number }): Promise<UserAverageResponse> {
		return Promise.resolve({
			userId: 12,
			sessions: [
				{
					day: "L",
					sessionLength: 30,
				},
				{
					day: "M",
					sessionLength: 23,
				},
				{
					day: "M",
					sessionLength: 45,
				},
				{
					day: "J",
					sessionLength: 50,
				},
				{
					day: "V",
					sessionLength: 0,
				},
				{
					day: "S",
					sessionLength: 0,
				},
				{
					day: "D",
					sessionLength: 60,
				},
			],
		});
	}
	getUserPerformance({ userId }: { userId: number }): Promise<any> {
		// pas de mapping, renvoie directement cette affichage
		/* 
					1: "Cardio",
			2: "Energie",
			3: "Endurance",
			4: "Force",
			5: "Vitesse",
			6: "Intensité",
			*/
	}
}
