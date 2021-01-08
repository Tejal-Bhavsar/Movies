import React from 'react'

export default function Header({  setSearchval,searchval}) {
    return (
        <div>
            <div className="container">
                <div className="row m-3 align-items-center  mb-4">
                    <div className="col">
                         <h2>Movies</h2>
                    </div>
                    <div className="col">
                        <form>
                            <input type="text"
                            value={searchval}
                            className="searchbox"
                              placeholder="search for the movie"  
                             onChange={(e) => setSearchval(e.target.value)} 
                             />
                             
                        </form>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
