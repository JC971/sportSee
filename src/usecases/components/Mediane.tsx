const USER_ACTIVITY = [
	{
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
	},
	{
		userId: 18,
		sessions: [
			{
				day: "2020-07-01",
				kilogram: 70,
				calories: 240,
			},
			{
				day: "2020-07-02",
				kilogram: 69,
				calories: 220,
			},
			{
				day: "2020-07-03",
				kilogram: 70,
				calories: 280,
			},
			{
				day: "2020-07-04",
				kilogram: 70,
				calories: 500,
			},
			{
				day: "2020-07-05",
				kilogram: 69,
				calories: 160,
			},
			{
				day: "2020-07-06",
				kilogram: 69,
				calories: 162,
			},
			{
				day: "2020-07-07",
				kilogram: 69,
				calories: 390,
			},
		],
	},
];

//  userId = 12
const user = USER_ACTIVITY.find((user) => user.userId === 12);


const sessionsForUserId12 = user
	? user.sessions.map((session) => ({
			day: session.day,
			kilogram: session.kilogram,
			calories: session.calories,
	  }))
	: [];

// Fonction pour calculer la médiane
function Mediane(values: number[]): number{
	if (values.length === 0) return 0;
	values.sort((a, b) => a - b);
	const half = Math.floor(values.length / 2);
	if (values.length % 2) return values[half];
	return (values[half - 1] + values[half]) / 2.0;
}


const calorieValues = sessionsForUserId12.map((session) => session.calories);
const valeurMédiane = Mediane(calorieValues);

console.log(valeurMédiane); 


export default Mediane;
