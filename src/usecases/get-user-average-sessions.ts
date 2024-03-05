import { userLoader } from "../main";
import { UserAverageResponse } from "../model/user.interface";

export const getUserAverage = async ({
	userId,
}: {
	userId: number;
}): Promise<UserAverageResponse> => {
	const userAverage = userLoader().getUserAverage({ userId });

	return userAverage;
};
