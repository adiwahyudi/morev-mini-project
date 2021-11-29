import { useQuery } from "@apollo/client";
import { Get3CommentByMovieId } from "../GraphQL/Query";

export default function useGet3CommentByMovieId(id_movie){
    const {
        data: dataMovieComment,
        loading: loadingMovieComment,
        error: errorMovieComment
    } = useQuery(Get3CommentByMovieId, {variables: {id_movie} });
    
    return {
        dataMovieComment,
        loadingMovieComment,
        errorMovieComment
    };
}