import { userLoader } from "../main";
import { UserActivity } from "../model/user.interface";

export const getUserActivity = async ({
	userId,
}: {
	userId: number;
}): Promise<UserActivity> => {
	const userData = userLoader().getUserActivity({ userId });

	return userData;
};
//gestion erreur
