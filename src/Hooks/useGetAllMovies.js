import { useQuery } from "@apollo/client";
import { GetAllMovies } from "../GraphQL/Query";

export default function useGetAllMovies(){
    const {
        data: dataAllMovies,
        loading: loadingAllMovies,
        error: errorAllMovies
    } = useQuery(GetAllMovies)
    
    return {
        dataAllMovies,
        loadingAllMovies,
        errorAllMovies
    };
}