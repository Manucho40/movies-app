import Card from "./Card";

const DisplayList = ({allMovies}: any) => {
    let allMoviesShow: any = []
    if(allMovies){
        allMoviesShow = allMovies.map((item: any, index: number) => <Card index={index} item={item}/>)
    }
    return ( 
        <>
        <div className="displayList container">
                {allMoviesShow}
        </div>
        </>
     );
}
 
export default DisplayList;