import { useMutation } from "@apollo/client";
import { UpdateLike } from "../GraphQL/Mutation";

export default function useUpdateLike(){
    const [updateLike, {loading: loadingUpdateLike}] = useMutation(UpdateLike)

    return {
        updateLike,
        loadingUpdateLike
    }
}