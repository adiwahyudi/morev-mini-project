import { useMutation } from "@apollo/client";
import { UpdateUser } from "../GraphQL/Mutation";
import { GetMyInformationById } from "../GraphQL/Query";

export default function useUpdateUser(){
    const [updateUser, {loading: loadingUpdateUser}] = useMutation(UpdateUser, {refetchQueries: [GetMyInformationById]})

    return {
        updateUser,
        loadingUpdateUser
    }
}