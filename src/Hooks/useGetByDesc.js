import { useQuery } from "@apollo/client"
import { GetByDesc } from "../GraphQL/Query"

export default function useGetByDesc(){
    const {data:dataByDesc,loading:loadingByDesc,error:errorByDesc} = useQuery(GetByDesc)

    return {dataByDesc,loadingByDesc,errorByDesc}
}