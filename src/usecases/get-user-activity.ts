import { userLoader } from "../main";
import { UserActivityResponse } from "../model/user.interface";

export const getUserActivity = async ({
  userId,
}: {
  userId: number;
}): Promise<UserActivityResponse> => {
  const userData = userLoader().getUserActivity({ userId });

  return userData;
};
