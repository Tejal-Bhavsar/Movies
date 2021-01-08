import React from 'react'

export default function Fav({favourite,id}) {
    return (
        <>
                <div className="moviecard d-flex 
                justify-content-start m-3">
                    <img src={favourite.Poster} />

            </div> 
        </>
    )
}
