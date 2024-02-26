/*import { useEffect, useState } from "react";
import "./App.scss";
//import { getUserDataInMemory } from "./usecases/get-user-data";
import type { UserDataResponse } from "./usecases/get-user-data";
import TopHeader from "../src/usecases/components/TopHeader";
import SideIcons from "./usecases/components/SideIcons";
import FirstNameIdent from "./usecases/components/FirstNameIdent";
import ChartActivities from "./usecases/components/ChartActivities";
import { user } from "./main";



function App() {
	const [user, setUser] = useState<UserDataResponse | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			const userData = await getUserData({ userId: USER });
			setUser(userData);
		};

		fetchUser();

		const userData = getUserDataInMemory();
		setUser(userData);
	}, []);

	if (!user) return null;

	return (
		<>
			<TopHeader />
			<SideIcons />
			<main>
				<FirstNameIdent firstName={user.userInfos.firstName} />
				<div className="main-chart">
					<ChartActivities user={user} />
				</div>
			</main>
		</>
	);
}

export default App;
*/
import { useEffect, useState } from "react";
import "./App.scss"; //ok
import TopHeader from "./components/TopHeader";
import SideIcons from "./components/SideIcons";
import FirstNameIdent from "./components/FirstNameIdent";
import ChartActivities from "./components/ChartActivities";
//import { UserDataResponse } from "./usecases/get-user-data";
import { UserDataResponse } from "./model/user.interface";
import { getUserData } from "./usecases/get-user-data";
import { USER } from "./main";

function App() {
	const [user, setUser] = useState<UserDataResponse | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			const userData = await getUserData({ userId: USER });
			setUser(userData);
		};

		fetchUser();
	}, []);

	if (!user) return null;

	return (
		<>
			<TopHeader />
			<SideIcons />
			<main>
				<FirstNameIdent firstName={user.userInfos.firstName} />
				<div className="main-chart">
					<ChartActivities user={user} />
				</div>
			</main>
		</>
	);
}

export default App;
