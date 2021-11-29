import { useQuery } from "@apollo/client";
import { Get3FeaturedMovies } from "../GraphQL/Query";

export default function useGet3Featured(){
    const {
        data: dataFeatured3,
        loading: loadingFeatured3,
        error: errorFeatured3
    } = useQuery(Get3FeaturedMovies);
    
    return {
        dataFeatured3,
        loadingFeatured3,
        errorFeatured3
    };
}