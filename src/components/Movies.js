import React,{ useState, useEffect } from 'react'
import Movielist from '../components/Movielist'
import Header from '../components/Header'
import FavouriteAdd from './FavouriteAdd'
import AddFav from '../components/AddFav'



export default function Movies() {
const [ movies, setMovies ] = useState([])
const [ searchval ,setSearchval ] = useState()
const [ favmovie, setFavourite ] = useState([])
 
   useEffect (() => {
       getMovies()
   },[searchval])

   useEffect (() => {
       const movieFav = JSON.parse(localStorage.getItem("react-app-fav-movie"));
       setFavourite(movieFav);
   },[])


   const saveToLocalStorage = (items) => {
       localStorage.setItem('react-app-fav-movie', JSON.stringify(items))
   }
   const getfavmovies = (movie) =>{
       
        const newFavlist = ([...favmovie,movie])
        // const newFavlist = (movies) => {
        //     if(movies.id != )
        // }
       setFavourite(newFavlist);
       saveToLocalStorage(newFavlist)

   }

    const getMovies = async() => {
        const data = await fetch(`http://www.omdbapi.com/?apikey=6120232c&s=${searchval}`);
        const dataJson = await data.json()

        if(dataJson.Search){ 
            setMovies(dataJson.Search)
        }
    
    }

    const removefavMovie = (movie) => {
        const newfavMovie = favmovie.filter((favourite) => favourite.imdbID !== movie.imdbID)
        setFavourite(newfavMovie)
        saveToLocalStorage(newfavMovie)
    }
    return (
        <>
            <Header setSearchval={setSearchval} searchval={searchval}  />
            <div className="box container-fluid">
                <div className="row">
                    
                    {movies.map((movie,index) => (
                        <Movielist
                        id={index}
                        key={movie.id}
                        movie={movie}
                        getfavmovies={getfavmovies} />
                        
                    ))}
                    
                </div>
                 
                <h1>Favourite Movies</h1>
                    
                
                <div className="row">
                   {favmovie.map((fav,index) => 
                       <FavouriteAdd fav={fav} 
                       removefavMovie={removefavMovie}/>
                   )}
                  
                </div>
               
            
            </div>
        </>
    )
}
