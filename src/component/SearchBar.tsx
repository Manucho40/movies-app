import { FC, useState } from "react";


type Props = {
    valueSearch: string,
    handleValueSearch: (e:React.ChangeEvent<HTMLInputElement>) => void
}
const SearchBar: FC <Props> = ({valueSearch, handleValueSearch}) => {

    return ( 
        <>
            <div className="searchDiv container">
                    <input type="text" value={valueSearch} onChange={handleValueSearch} className="searchMovie" id="exampleFormControlInput1" placeholder="Search Movie" />            
            </div>
        </>
     );
}
 
export default SearchBar;