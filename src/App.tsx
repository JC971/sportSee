import { useEffect, useState } from "react";
import "./App.scss";
import { getUserDataInMemory } from "./usecases/get-user-data";
import type { UserDataResponse } from "./usecases/get-user-data";
import TopHeader from "../src/usecases/components/TopHeader";
import SideIcons from "./usecases/components/SideIcons";
import FirstNameIdent from "./usecases/components/FirstNameIdent";
import ChartActivities from "./usecases/components/ChartActivities";
import "./styles/firstName.scss";
import RightBanner from "./usecases/components/RightBanner";

//const USER = 12;

function App() {
	const [user, setUser] = useState<UserDataResponse | null>(null);

	useEffect(() => {
		/*const fetchUser = async () => {
			const userData = await getUserData({ userId: USER });
			setUser(userData);
		};

		fetchUser();*/

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
				<ChartActivities />
				<RightBanner/>
			</main>
		</>
	);
}

export default App;
