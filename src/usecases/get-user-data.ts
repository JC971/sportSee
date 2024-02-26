import { userLoader } from "../main";
import { UserDataResponse } from "../model/user.interface";

export const getUserData = async ({
  userId,
}: {
  userId: number;
}): Promise<UserDataResponse> => {
  const userData = userLoader().getUserData({ userId });

  return userData;
};




 

