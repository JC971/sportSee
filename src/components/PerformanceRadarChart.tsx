import { useEffect, useState } from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";
import { getUserPerformance } from "../usecases/get-user-performance";
import { UserPerformanceData } from "../model/user.interface";

export const PerformanceRadarChart = ({ userId }: { userId: number }) => {
	const [performance, setPerformance] = useState<UserPerformanceData[]>([]);

	useEffect(() => {
		const fetchPerformance = async () => {
			try {
				const response = await getUserPerformance({ userId });
				if (response) {
					setPerformance(response.data);
				} else {
					setPerformance([]);
				}
			} catch (error) {
				console.error("Erreur lors de la récupération", error);
				setPerformance([]);
			}
		};
		fetchPerformance();
	}, [userId]);

	return (
		<div className="performances">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="70%" data={performance}>
					<PolarGrid />
					<PolarAngleAxis
						dataKey="subject"
						style={{ fontSize: "12px", fontWeight: "500" }}
					/>

					<Radar
						name="User Performance"
						dataKey="value"
						stroke="#FFFFFF"
						strokeWidth={0.5}
						fill="#FF0101B2"
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};
