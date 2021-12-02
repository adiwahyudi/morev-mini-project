import {gql} from '@apollo/client'

const SubsDetailMovie = gql`
subscription MySubscription($id: Int) {
  movies(where: {id: {_eq: $id}}) {
    id
    banner
    genre
    isFeatured
    likes
    name
    poster
    synopsis
    rating
    year
  }
}
`
export {SubsDetailMovie}