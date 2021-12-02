import { useMutation } from "@apollo/client";
import { CreateUser } from "../GraphQL/Mutation";

export default function useCreateUser(){
    const [createUser, {loading: loadingCreateUser}] = useMutation(CreateUser)

    return {createUser,loadingCreateUser}
}