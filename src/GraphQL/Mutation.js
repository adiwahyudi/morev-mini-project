import {gql} from '@apollo/client'

const InsertReview = gql`
    mutation MyMutation($id_movies: Int, $id_user: Int, $rating: Int, $review: String) {
        insert_review(objects: {id_movies: $id_movies, id_user: $id_user, rating: $rating, review: $review}) {
        affected_rows
        }
    }
`
const UpdateReview = gql`
    mutation MyMutation2($id: Int, $rating: Int, $review: String) {
        update_review(where: {id: {_eq: $id}}, _set: {rating: $rating, review: $review}) {
          affected_rows
          returning {
            id
            id_movies
            id_user
            rating
            review
          }
        }
      }
`
const DeleteReview = gql`
    mutation DeleteReview($id: Int!) {
        delete_review_by_pk(id: $id) {
        review
        }
    }
`
export {InsertReview,DeleteReview,UpdateReview}

    // mutation UpdateReview($id: Int!, $rating: Int!, $review: String) {
    //     update_review_by_pk(pk_columns: {id: $id}, _set: {rating: $rating, review: $review}) {
    //     id
    //     id_movies
    //     id_user
    //     rating
    //     review
    //     }
    // }