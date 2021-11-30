import { useMutation } from "@apollo/client";
import { DeleteReview } from "../GraphQL/Mutation";
import { GetMyReview,Get3CommentByMovieId } from "../GraphQL/Query";

export default function useDeleteReview(){
    const [deleteReview, { loading: loadingDeleteReview}] = useMutation(DeleteReview, {refetchQueries:[GetMyReview,Get3CommentByMovieId]})

    return {deleteReview,loadingDeleteReview}
}