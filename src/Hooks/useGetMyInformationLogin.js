import { useLazyQuery } from "@apollo/client";
import { GetMyInformationLogin } from "../GraphQL/Query";

export default function useGetMyInformationLogin(){
    const [ getMyInformationLogin , {data,loading,error} ]= useLazyQuery(GetMyInformationLogin);

    return {
        getMyInformationLogin,
        data,
        loading,
        error
    };
}   