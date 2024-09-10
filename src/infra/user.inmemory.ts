import {
	UserActivity,
	UserData,
	UserAverage,
	UserGateway,
	UserPerformance,
} from "../model/user.interface";
//import { UserAverage } from "./user.api";

// c'est la class de mock (même si ici on appel ça un fake), elle implémente l'interface UserGateway qui permet
// de vérifier qu'il y a bien les bonnes méthodes et les bons objets en retour
export class InMemoryUser implements UserGateway {
	getUserActivityInMemory({
		userId,
	}: {
		userId: number;
	}): Promise<UserActivity> {
		throw new Error("Method not implemented.");
	}
	getUserData({ userId }: { userId: number }): Promise<UserData> {
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
	getUserActivity({ userId }: { userId: number }): Promise<UserActivity> {
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
	getUserAverage({ userId }: { userId: number }): Promise<UserAverage> {
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
	getUserPerformance({ userId }: { userId: number }): Promise<UserPerformance> {
		return Promise.resolve({
			userId: 12,
			data: [
				{
					value: 80,
					subject: "Cardio",
				},
				{
					value: 120,
					subject: "Energy",
				},
				{
					value: 140,
					subject: "Endurance",
				},
				{
					value: 50,
					subject: "Strength",
				},
				{
					value: 200,
					subject: "Speed",
				},
				{
					value: 90,
					subject: "Intensity",
				},
			],
		});
	}
}
