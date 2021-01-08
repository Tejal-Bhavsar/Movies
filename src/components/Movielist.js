import React from 'react'
import Favourite  from '../components/Favourite'
export default function Movielist({movie,getfavmovies,id}) {
    
    return (
        <>
               <div className="moviecard d-flex justify-content-start m-3"> 
                  
                    <img src={movie.Poster}></img>
                    <div onClick={() => getfavmovies(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <Favourite /> 
                    </div>
                    {console.log(movie)}
                   
                </div>
            
       
      </>
    )
}
