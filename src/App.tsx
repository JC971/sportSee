import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { getUserDataInMemory } from "./usecases/get-user-data";
import type { UserDataResponse } from "./usecases/get-user-data";
import TopHeader from "../src/usecases/components/TopHeader";
import SideIcons from "./usecases/components/SideIcons";
import FirstNameIdent from "./usecases/components/FirstNameIdent";
import ChartActivities from "./usecases/components/ChartActivities";


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

	return (
		<Router>
			<TopHeader user={user} />
			
				<SideIcons />
				<FirstNameIdent userId={user ? user.id : 0} userData={user} />
				<ChartActivities/>
			
		</Router>
	);
}

export default App;
