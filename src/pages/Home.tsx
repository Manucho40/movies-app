import { useState } from "react";
import DisplayList from "../component/DisplayList";
import SearchBar from "../component/SearchBar";



const Home = ({allMovies}: any) => {
    const [valueSearch, setValueSearch] = useState<string>("");
    const handleValueSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
      setValueSearch(e.target.value.toLocaleLowerCase())
  }
    return ( 
        <>
            <h1 className="text-center bigTitle">Last Trending</h1>
            <SearchBar valueSearch={valueSearch} handleValueSearch={handleValueSearch} />
            <DisplayList valueSearch={valueSearch} allMovies={allMovies}/>
        </>
     );
}
 
export default Home;