import { useQuery } from "@apollo/client"
import { GetByRating } from "../GraphQL/Query"

export default function useGetGetByRating(order){
    const {data:dataByRating,loading:loadingByRating,error:errorByRating} = useQuery(GetByRating)

    return {dataByRating,loadingByRating,errorByRating}
}