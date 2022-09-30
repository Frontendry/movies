// Movie Instance
import Movie from "./movie";

const Movies = ({ moviesCollection, collectionTitle }) => {
  return (
    <section className="pb-16">
      <div className="container mx-auto px-7">
        <header className="mb-12">
          <h2 className="text-white text-3xl">{collectionTitle}</h2>
        </header>

        <div className="grid grid-cols-4 gap-6">
          {moviesCollection.map((movieData) => (
            <Movie key={movieData.imdbID} movieData={movieData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movies;
