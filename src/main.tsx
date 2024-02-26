import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { InMemoryUser } from "./infra/user.inmemory.ts";
import { ApiUser } from "./infra/user.api.ts";

// la constante user à modifier pour 12 ou 18
export const USER = 12;
// la constante SOURCE pour varié entre les fake data et l'api
export const SOURCE: string = "api";

export const userLoader = () => {
	switch (SOURCE) {
		case "inmemory":
			return new InMemoryUser();
		default:
			return new ApiUser();
	}
};

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
