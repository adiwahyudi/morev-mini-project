import { useQuery } from "@apollo/client"
import { GetByAsc } from "../GraphQL/Query"

export default function useGetByAsc(){
    const {data:dataByAsc,loading:loadingByAsc,error:errorByAsc} = useQuery(GetByAsc)

    return {dataByAsc,loadingByAsc,errorByAsc}
}