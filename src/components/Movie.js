import { useContext } from "react";
import UserContext from "../context/UserContext";

const Movie = ({movie}) => {

  const imgStyles ={
    height:'260px',
    objectFit:'cover'
  }
  const {toggleFavoriteMovieToUser,user} = useContext(UserContext)

  const isFavorite = user?.favoriteMovies?.includes(movie.id)


   return (
    <div className="card">
      <img src={movie.imageUrl} alt={movie.title} 
      className='card-img-top'
      style={imgStyles}
      />
     <div className="card-body">
      <h4> {movie.title} </h4>
      {user?.id && 
        <button className={ `btn ${isFavorite ? 'btn-success  ' : 'btn-outline-primary'}`} 
         onClick={ () => toggleFavoriteMovieToUser(movie.id)}
         >
         Favorito
        </button>
      }

     </div>
    </div>
  )
}
export default Movie