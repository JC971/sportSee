/*import React, { PureComponent } from "react";

import {
	RadialBarChart,
	RadialBar,
	Legend,
	ResponsiveContainer,
} from "recharts";
import "./score.scss";
import { getUserDataInMemory } from "../get-user-data"; 

export default class ScoreChart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			userData: null,
		};
	}

	componentDidMount() {
		const userData = getUserDataInMemory();
		this.setState({ userData });
	}

	render() {
		const { userData } = this.state;

		
		if (!userData) {
			return <div>En attente...</div>;
		}

		const data = [
			{
				uv: userData.todayScore * 100,
				fill:'#FF0101B2',
			},
		];

		const style = {
			top: "80%",
			right: 50,
			transform: "translate(-25%, -700%)",
			lineHeight: "24px",
		};

		return (
			<div className="score-chart">
				<span className="score">Score</span>
				<ResponsiveContainer width="100%" height={"100%"}>
					<RadialBarChart
						cx="50%"
						cy="50%"
						innerRadius="100%"
						
						startAngle={90}
						endAngle={-270}
						barSize={10}
						data={data}
					>
						<RadialBar
							minAngle={15}
							background={false}
							clockWise
							dataKey="uv"
							
						/>
						<Legend
							iconSize={0}
							layout="horizontal"
							verticalAlign="middle"
							wrapperStyle={style}
						/>
					</RadialBarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
*/

import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getUserDataInMemory } from "../get-user-data";
import "./score.scss";

export default class ScorePieChart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			userData: null,
		};
	}

	componentDidMount() {
		const userData = getUserDataInMemory();
		this.setState({ userData });
	}

	render() {
		const { userData } = this.state;

		if (!userData) {
			return <div>En attente...</div>;
		}

		const scorePercentage = (userData.todayScore * 100)

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
							score
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
					{scorePercentage}% <span className="objectif">de votre objectif</span>
				</div>
			</div>
		);
	}
}
