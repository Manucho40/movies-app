import React from "react";



const InfoSurvol = ({survolBool, overview}: any) => {
    const styles = { 
        transform: `translateY(0%)` 
    };
    const stylesDefault = { 
        transform: `translateY(100%)` 
    };
 
    return ( 
        <>
            <div className="InfoSurvol" style={survolBool ? styles : stylesDefault}>
                <h5 className="justify">Overview</h5>
                <span>
                    {overview}
                </span>
            </div>
        </>
     );
}
 
export default InfoSurvol;