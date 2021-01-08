import React from 'react'
import RemoveFav from './RemoveFav'

export default function FavouriteAdd({fav,removefavMovie}) {
    return (
        <>   

                
              <div className="moviecard d-flex 
                justify-content-start m-3">
                   <img src={fav.Poster} alt="movie" />
                   <div  onClick={() => removefavMovie(fav)}className="overlay d-flex align-items-center justify-content-center">
                       <RemoveFav  />
                    </div>
            </div> 
            {console.log(fav, "likked")}

                {/* {favouritemovie.map((favourite,index) => {
                    return <Fav favourite={favourite}
                    key={favourite.id}
                    id={favourite.id}/>
                })} */}
        </>
    )
}
