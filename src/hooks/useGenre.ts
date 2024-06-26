import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<FetchResponse<Genre>>('/genres');

const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000 // 24h
});

export default useGenre;