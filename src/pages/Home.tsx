import axios from "axios";
import { useEffect, useState } from "react";
import DisplayList from "../component/DisplayList";
import SearchBar from "../component/SearchBar";

const Home = () => {
    const [allMovies, setAllMoovies] = useState<any>();

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=f2ef4ff4389d038d917bba6974e77051').then((response) => {
        setAllMoovies(response.data.results)
      })
    }, [])
    return ( 
        <>
            <SearchBar />
            <DisplayList allMovies={allMovies}/>
        </>
     );
}
 
export default Home;