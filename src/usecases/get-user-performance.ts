export type userPerformanceResponse = {
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

