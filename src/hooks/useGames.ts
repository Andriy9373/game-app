import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const apiClient = new APIClient<FetchResponse<Game>>('/games');

const useGames = (gameQuery: GameQuery) => {
    const params = {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page_size: 40
    }

    return useQuery({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.getAll({params})
    })
}

export default useGames;