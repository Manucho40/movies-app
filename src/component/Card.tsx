import { useEffect, useRef, useState } from "react";
import InfoSurvol from "./InfoSurvole";

const Card = ({item}: any) => {
    const [survolBool, setSurvolBool] = useState<boolean>(false);
    const card: React.MutableRefObject<null> = useRef(null);

    const afficherInformation = () => {
        const affichInfo = document.querySelector(".card");
        if(survolBool){
            affichInfo?.classList.add("affich")
        }
    }
    return ( 
        <>
            <div className="card" ref={card} onChange={afficherInformation} onMouseEnter={() => setSurvolBool(true)} onMouseLeave={() => setSurvolBool(false)}>
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                <InfoSurvol />
            </div>
        </> 
     );
}
 
export default Card;