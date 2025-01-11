import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useFavsQuery = function () {
  const { authToken } = useAuth();

  const query = useQuery({
    queryKey: [`favs`],
    queryFn: async () => {
      return [];
    },
  });

  return query;
};
