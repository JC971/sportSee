import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./score.scss";
import { getUserData } from "../usecases/get-user-data";
import { USER } from "../main";
import { UserDataResponse } from "../model/user.interface";

const ScorePieChart = () => {
	const [userData, setUserData] = useState<UserDataResponse | null> (null);

	useEffect(() => {
		const fetchUser = async () => {
			const data = await getUserData({ userId: USER });
			setUserData(data);
		};

		fetchUser();
	}, []);

	if (!userData) {
		return <div>Veuillez patienter...</div>;
	}

	// Créer les données pour le PieChart
	const pieData = [
		{ name: "Score", value: userData.todayScore },
		{ name: "Rest", value: 1 - userData.todayScore },
	];

	return (
		<div className="score-chart">
			<span className="score">Score</span>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={pieData}
						innerRadius="70%"
						outerRadius="80%"
						dataKey="value"
						startAngle={180}
						endAngle={-270}
					>
						<Cell key={`cell-score`} fill="#FF0101B2" />
						<Cell key={`cell-rest`} fill="transparent" />
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<div
				className="score-percentage"
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					fontSize: "26px",
					color: "#282D30",
				}}
			>
				{userData.todayScorePercentage}%{" "}
				<span className="objectif">de votre objectif</span>
			</div>
		</div>
	);
};


export default ScorePieChart;
