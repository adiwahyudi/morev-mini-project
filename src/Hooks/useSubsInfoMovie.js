import { useSubscription } from "@apollo/client";
import { SubsDetailMovie } from "../GraphQL/Subscription";

export default function useSubsDetailMovie(id) {
  console.log("tipe id",typeof id);
  console.log("id",id);
  const { data:dataSubsDetail, loading:loadingSubsDetail,error:errorSubsDetail } = useSubscription(SubsDetailMovie, {variables: {id} } );

  return {dataSubsDetail,loadingSubsDetail,errorSubsDetail};
}