export type Session = {
    day: number;
    sessionLength: number
}

export type UserAverageResponse = {
    userId: number;
    sessions:Session[]
}

export const getUserAverage = async ({
    userId
}: { userId: number; }): Promise<UserAverageResponse> => {
    try{
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
    if (!response.ok) {
    throw new Error(`Erreur du réseau: ${response.status}`)
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

export const getUserAverageInMemory = () :UserAverageResponse=> {
    return {
        userId: 12,
        sessions:[
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                  day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
              
    }
}


