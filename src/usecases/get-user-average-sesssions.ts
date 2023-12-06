export type UserAverageResponse = {
    userId: number;
    sessions:Array<{
        day: number;
        sessionLength: number
}>;
}

export const getUserAverage = async ({
    userId
}: { userId: number; }): Promise<UserAverageResponse> => {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);

    const data: UserAverageResponse = await response.json();

    return data;
}


