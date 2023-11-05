import React, {useState, useEffect} from "react";
import "./Paginate.css"
import "./Character.css"




function Characters() {
  const [characters, setCharacters] = useState([]);
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)


  useEffect(() => {
    fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`)
      .then(response => response.json().then(data => {
        setCharacters(data);
        console.log(data.length)
      }))
      .catch(error => {
        console.error(error);
      });
  }, [page, pageSize]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  return (
    <>
     <div>
      <h1>Characters</h1>
      <h2 class="alignRight">
        <button><a href="/">Home Page</a></button>
      </h2>
      <div>
      {characters.map((character) => <Character name={character.name ? character.name : character.aliases} gender={character.gender} culture={character.culture}/>)}
      </div>
    </div>
    <ul className = "pagination">
    <li className><button type="button" onClick={() => setPage (page => page - 1)} disabled={page === 1}>Previous Page</button></li>
    <li className="page-num">{page}</li>
    <li className><button type="button" onClick={() => setPage (page => page + 1)}>Next Page</button></li>
    </ul>
    
    </>
  );
}

function Character({name, gender, culture}) {
  return(
    <div class="characterList"  key={name}>
      <h2> Name : {name} </h2>
      <h2> Gender: {gender} </h2>
      <h2> Culture : {culture} </h2>
    </div>
  )
}

export default Characters;