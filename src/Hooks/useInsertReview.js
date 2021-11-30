import { useMutation } from "@apollo/client";
import { InsertReview } from "../GraphQL/Mutation";
import { GetMyReview,Get3CommentByMovieId } from "../GraphQL/Query";

export default function useInsertReview(){
    const [insertReview, {loading: loadingInsertReview}] = useMutation(InsertReview, {refetchQueries: [GetMyReview,Get3CommentByMovieId]})

    return {
        insertReview,
        loadingInsertReview
    }
}