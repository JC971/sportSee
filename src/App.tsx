
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { getUserData } from "./usecases/get-user-data";
import type { UserDataResponse } from "./usecases/get-user-data";
import TopHeader from "../src/usecases/components/TopHeader";
import SideIcons from "./usecases/components/SideIcons";
import LastNameIdent from "./usecases/components/LastNameIdent";

const USER = 12;

function App() {
	const [user, setUser] = useState<UserDataResponse | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			const userData = await getUserData({ userId: USER });
			setUser(userData);
		};

		fetchUser();
	}, []);

	return (
		<Router>
			<TopHeader user={user} />
			<SideIcons />
			<LastNameIdent userId={USER} userData={user} />
		</Router>
	);
}

export default App;



