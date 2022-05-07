import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, runtime, genres }) {
  return (
    <div>
      <Link to="/Detail">
        <img src={coverImg} alt={title} />
      </Link>

      <h2>
        <Link to={`/Detail/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <p>{runtime}mins</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  runtime: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string.isRequired),
  id: propTypes.number.isRequired,
};
export default Movie;
