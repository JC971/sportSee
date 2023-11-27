import { useEffect, useState } from "react";
import "./App.css";
import { getUserData } from "./usecases/get-user-data";
import type { UserDataResponse } from "./usecases/get-user-data";

const USER = 12;

function App() {
	const [user, setUser] = useState<UserDataResponse | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			const user = await getUserData({ userId: USER });
			setUser(user);
		};

		fetchUser();
	}, []);

	return <div className="toto">ok</div>;
}

export default App;
