import { useMutation } from "@apollo/client";
import { UpdateReview } from "../GraphQL/Mutation";
import { GetMyReview,Get3CommentByMovieId } from "../GraphQL/Query";

export default function useUpdateReview() {

    const [updateReview, {loading: loadingUpdateReview}] = useMutation(UpdateReview, {refetchQueries: [GetMyReview,Get3CommentByMovieId]})

    return {updateReview,loadingUpdateReview}
}