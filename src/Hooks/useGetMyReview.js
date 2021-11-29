import { useQuery } from "@apollo/client";
import { GetMyReview } from "../GraphQL/Query";

export default function useGetMyReview(id_movie,id_user){
    const {
        data: dataMyReview,
        loading: loadingMyReview,
        error: errorMyReview
    } = useQuery(GetMyReview, {variables: {id_movie, id_user} });
    
    return {
        dataMyReview,
        loadingMyReview,
        errorMyReview
    };
}