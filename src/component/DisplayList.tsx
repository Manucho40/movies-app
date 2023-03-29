import { FC, useState } from "react";
import Card from "./Card";
type Props = {
    allMovies: any,
    valueSearch: string
}
const DisplayList:FC<Props> = ({allMovies, valueSearch}) => {
    let allMoviesShow: any = []
    if(allMovies){
        allMoviesShow = allMovies.filter((allMovies: any) => {
            if(valueSearch === ''){
                return allMovies;
            }
            else{
                return allMovies.original_title.toLowerCase().includes(valueSearch)
            }    
    })
    }

    
    // const filterMovie =  ?  : console.log("allMovie n'est pas encore initialisé")
    return ( 
        <>
        <div className="displayList container">
            {
                allMoviesShow.map((item:any) => (
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
        </>
     );
}
 
export default DisplayList;