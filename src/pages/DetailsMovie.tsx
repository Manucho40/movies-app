import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailsMovie = ({ allMovies }: any) => {
  const params = useParams();
  // const [film, setFilm] = useState<any | null>(null)
  const detailMovie = allMovies
    ? allMovies.filter((item: any) => item.id == params.id)
    : console.log("AllMovie n'est pas encore chargé");
  let film: any = [];
  if (detailMovie) {
    film = detailMovie;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Link to="/">
            <h5 className="text-justify back">Back</h5>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-white">{film[0]?.original_title}</h1>
        </div>
      </div>
      <div className="container mt-5 detailCont">
        <div className="row">
          <div className="col-md-6">
            <img
              className="imgDetail img-fluid"
              src={`https://image.tmdb.org/t/p/w500/${film[0]?.poster_path}`}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="md-12">
                <p>
                  Vote average: <span>{film[0]?.vote_average} / 10</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="md-12">
                <p>
                  Nbre Vote: <span>{film[0]?.vote_count}</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="md-12">
                <p>
                  Popularity: <span>{film[0]?.popularity}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsMovie;
