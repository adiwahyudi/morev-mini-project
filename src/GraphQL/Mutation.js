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

const UpdateUser = gql`
    mutation UpdateUser($id: Int!, $first_name: String, $last_name: String, $email: String, $avatar: String, $password: String) {
        update_user_by_pk(pk_columns: {id: $id}, _set: {first_name: $first_name, last_name: $last_name, email: $email, avatar: $avatar, password: $password}) {
        id
        first_name
        last_name
        email
        avatar
        password
        }
    } 
`

const UpdateLike = gql`
    mutation UpdateLike($id: Int!, $likes: Int!) {
        update_movies_by_pk(pk_columns: {id: $id}, _set: {likes: $likes}) {
        likes
        id
        name
        }
    }
`

const CreateUser = gql`
    mutation MyMutation($first_name: String, $last_name: String, $email: String, $password: String, $avatar: String) {
        insert_user(objects: {last_name: $last_name, email: $email, password: $password, first_name: $first_name, avatar: $avatar}) {
            affected_rows
        }
    }
`
export {InsertReview,DeleteReview,UpdateReview,UpdateUser,UpdateLike,CreateUser}

    // mutation UpdateReview($id: Int!, $rating: Int!, $review: String) {
    //     update_review_by_pk(pk_columns: {id: $id}, _set: {rating: $rating, review: $review}) {
    //     id
    //     id_movies
    //     id_user
    //     rating
    //     review
    //     }
    // }