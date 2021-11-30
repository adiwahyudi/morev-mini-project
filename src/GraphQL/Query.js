import {gql} from '@apollo/client'

const GetAllMovies = gql`
    query MyQuery {
        movies {
            id
            name
            rating
            synopsis
            year
            genre
            poster
            likes
            isFeatured
            banner
        }
    }  
`

const Get5TopRatedMovies = gql`
  query MyQuery2 {
      movies(order_by: {likes: desc}, limit: 5) {
        banner
        genre
        id
        isFeatured
        likes
        name
        poster
        rating
        synopsis
        year
      }
    }
`

const Get3FeaturedMovies = gql `
  query MyQuery {
    movies(limit: 3, where: {isFeatured: {_eq: true}}, order_by: {likes: asc}) {
      id
      genre
      banner
      isFeatured
      likes
      name
      poster
      rating
      synopsis
      year
    }
  }

`

const GetMoviesById = gql`
  query MyQuery($id: Int!) {
    movies(where: {id: {_eq: $id}}, order_by: {}) {
      id
      genre
      banner
      isFeatured
      likes
      name
      poster
      rating
      synopsis
      year
    }
  }
`

const Get3CommentByMovieId = gql`
  query MyQuery($id_movie: Int) {
    review(where: {id_movies: {_eq: $id_movie} }) {
      review
      rating
      user {
        first_name
        last_name
      }
    }
  }
`

const GetMyReview = gql`
  query MyQuery($id_movie: Int, $id_user: Int) {
    review(where: {id_movies: {_eq: $id_movie}, id_user: {_eq: $id_user}}) {
      id
      review
      rating
      user {
        first_name
        last_name
      }
    }
  }
`

const GetMyInformationLogin = gql`
  query MyQuery($email: String, $password: String) {
    user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
      avatar
      email
      first_name
      id
      last_name
      password
    }
  }
`
export {GetAllMovies,Get5TopRatedMovies,Get3FeaturedMovies,GetMoviesById,Get3CommentByMovieId,GetMyReview,GetMyInformationLogin}