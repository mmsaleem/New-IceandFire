import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Paginate.css"
import "./Character.css"


function Houses() {
  const [houses, setHouses] = useState([]);
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`)
      .then(response => {
        setHouses(response.data);
        console.log(response.data);
      })
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
      <h1>Houses</h1>
      <h2 class="alignRight">
        <button><a href="/">Home Page</a></button>
      </h2>
      <div class="houseList">
      {houses.map((house) => <House name={house.name} region={house.region} currentLord={house.currentLord} swornMembers={house.swornMembers} />)}
      </div>
    </div>
    <ul>
    <li className = "pagination"><button onClick={() => setPage (page => page - 1)} disabled={page === 1}>Previous Page</button></li>
    <li>{page}</li>
    <li><button onClick={() => setPage (page => page + 1)}>Next Page</button></li>
    </ul>
    </>
  );
}

function House({name, region, currentLord, swornMembers}) {
  return(
    <div className="characterList" key={name}>
      <h2> Name : {name} </h2>
      <h2> Region: {region} </h2>
      <h2> Current Lord: {currentLord} </h2>
      <h2> Sworn Members: {swornMembers} </h2>
    </div>
  )
}


export default Houses;