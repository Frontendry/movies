const MovieFull = ({ movieData }) => {
  console.log(movieData);

  return movieData && <div>{movieData.Title}</div>;
};

export default MovieFull;
