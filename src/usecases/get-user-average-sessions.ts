import { userLoader } from "../main";
import { UserAverage} from "../model/user.interface";

export const getUserAverage = async ({
	userId,
}: {
	userId: number;
}): Promise<UserAverage> => {
	const userAverage = userLoader().getUserAverage({ userId });

	return userAverage;
};
