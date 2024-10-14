import { useQuery } from "react-query";

const useIsLoggedIn = ({
  userId,
  sessionId,
}: {
  userId: string | null;
  sessionId: string | null;
}) =>
  useQuery<boolean, unknown, boolean, ["user"]>({
    queryKey: ["user"],
    queryFn: async () => {
      console.log({ userId, sessionId });
      if (!userId || !sessionId) {
        return false;
      }

      const response = await fetch(
        "https://dev3.rocketium.com/user/session/check",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            userId,
            sessionId,
          },
        }
      );
      const data = await response.json();
      return data.message === "successful";
    },
  });

export { useIsLoggedIn };
