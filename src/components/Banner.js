import React ,{useEffect,useState} from 'react'
import './Banner.css'
import requests from '../request'
import instance from '../instance'

function Banner() {
   

  const baseURL = "https://image.tmdb.org/t/p/original/"

  const [movie,setMovie] =useState({})
  const fetchData = async ()=>{
   const response =  await instance.get(requests.fetchNetflixOriginals)
   setMovie(response.data.results[
    Math.floor(Math.random()*response.data.results.length)
   ]);
  }
    
  console.log(movie)
  useEffect(()=>{
    fetchData()
  },[])

  return (
  
    <div
    className='banner'
    style={{


      backgroundSize:'cover',
      
      backgroundImage:`url(${baseURL}${movie.backdrop_path})`
    }}
    >Banner</div>
  )
}

export default Banner