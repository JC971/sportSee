import { user } from "./Mediane";

// Extraire les données de 'sessions' si l'utilisateur est trouvé
export const sessionsForUserId12 = user
	? user.sessions.map((session) => ({
			day: session.day,
			kilogram: session.kilogram,
			calories: session.calories,
	}))
	: [];
