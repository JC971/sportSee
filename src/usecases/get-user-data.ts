import { userLoader } from "../main";
import { UserData } from "../model/user.interface";

export const getUserData = async ({
  userId,
}: {
  userId: number;
}): Promise<UserData> => {
  const userData = userLoader().getUserData({ userId });

  return userData;
};




 

