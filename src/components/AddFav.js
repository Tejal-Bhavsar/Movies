import React from 'react'
 

export default function AddFav({index,fav}) {
    return (
        <div>
               <div className="moviecard d-flex 
                justify-content-start m-3">
                    <img src={fav.Poster} />
                   
                   
            </div> 
        </div>
    )
}
