import { useQuery } from "@apollo/client";
import { GetMoviesById } from "../GraphQL/Query";

export default function useGetMoviesById(id){
    const {
        data: dataMoviesById,
        loading: loadingMoviesById,
        error: errorMoviesById
    } = useQuery(GetMoviesById, {variables: {id} });
    
    return {
        dataMoviesById,
        loadingMoviesById,
        errorMoviesById
    };
}