import { useEffect, useRef, useState } from "react";
import InfoSurvol from "./InfoSurvole";

// type Props = {
//     item: any,
//     allM
// }
const Card = ({item, index}: any) => {
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
            <div className="card" key={index} ref={card}  onMouseEnter={() => setSurvolBool(true)} onMouseLeave={() => setSurvolBool(false)} >
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                <InfoSurvol overview={item.overview} survolBool={survolBool} />
            </div>
        </> 
     );
}
 
export default Card;