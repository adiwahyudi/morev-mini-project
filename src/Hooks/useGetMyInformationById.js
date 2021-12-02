import { useQuery } from "@apollo/client"
import { GetMyInformationById } from "../GraphQL/Query"

export default function useGetMyInformationById(id){
    const {data:dataInfo,loading:loadingInfo,error:errorInfo} = useQuery(GetMyInformationById,{variables: {id}})

    return {dataInfo,loadingInfo,errorInfo}
}