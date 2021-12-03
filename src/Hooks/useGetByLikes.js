import { useQuery } from "@apollo/client"
import { GetByLikes } from "../GraphQL/Query"

export default function useGetByLikes(order){
    const {data:dataByLikes,loading:loadingByLikes,error:errorByLikes} = useQuery(GetByLikes)

    return {dataByLikes,loadingByLikes,errorByLikes}
}