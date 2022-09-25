
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data,setData]=useState([]);
  const[page,setPage]=useState([]);
  const getAnime=(e)=>{
e.preventDefault();
  }
  useEffect(()=>{
    fetch(`https://api.jikan.moe/v4/anime?page=${data}`)
    .then(response=> response.json())
.then((json)=>{
  console.log(json.data);
  setData(json.data)
  setPage(json.pagination);
})
  },[]);
 

  return (
    <>
    <form className='d-flex' onSubmit={getAnime}>
      <input className='form-control me-2' type="Search" placeholder='Search' />
      
    </form>
    <div className="container">
{
  data && data.map((value)=>{
    return(
      <>
      <img src={value.url} />
      <h2>{value.mal_id}</h2>
      <h3>{value.title}</h3>
      </>
    )
  })
}
    </div>
    </>
  );

}
export default App;
