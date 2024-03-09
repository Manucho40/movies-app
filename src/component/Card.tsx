import { useEffect, useRef, useState } from "react";
import InfoSurvol from "./InfoSurvole";
import {Link} from "react-router-dom"
// type Props = {
//     item: any,
//     allM
// }
const Card = ({item}: any) => {
    const [survolBool, setSurvolBool] = useState<boolean>(false);
    const card: React.MutableRefObject<null> = useRef(null);
    // const afficherInformation = () => {
    //     const affichInfo = document.querySelector(".card");
    //     if(survolBool){
    //         affichInfo?.classList.add("affich")
    //     }
    // }
    return ( 
        <>
            <Link to={`/detail/${item.id}`}>
                <div className="card" ref={card}  onMouseEnter={() => setSurvolBool(true)} onMouseLeave={() => setSurvolBool(false)} >
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                    <InfoSurvol overview={item.overview} survolBool={survolBool} />
                </div>            
            </Link>
        </> 
     );
}
 
export default Card;