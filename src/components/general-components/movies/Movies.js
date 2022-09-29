// Movie Instance
import Movie from "./Movie";

const Movies = ({ moviesCollection, collectionTitle }) => {
  return (
    <section>
      <header>
        <h2>{collectionTitle}</h2>
      </header>

      <div className="">
        {moviesCollection.map((movieData) => (
          <Movie key={movieData.imdbID} movieData={movieData} />
        ))}
      </div>
    </section>
  );
};

export default Movies;
