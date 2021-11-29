import { useQuery } from "@apollo/client";
import { Get5TopRatedMovies } from "../GraphQL/Query";

export default function useGetTop5Movies(){
    const {
        data: dataTop5,
        loading: loadingTop5,
        error: errorTop5
    } = useQuery(Get5TopRatedMovies)
    
    return {
        dataTop5,
        loadingTop5,
        errorTop5
    };
}