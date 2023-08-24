// import HomePage from './components/homepage';
// import GetMoviesData from './components/GetMoviesData';
// import axios from 'axios';
// import React, { useState } from 'react';


// function HomePage() {
// const HomePage = () => { 
//     const [movieData,setMovieData]= useState();

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
//   headers: {
//     'X-RapidAPI-Key': 'b2b27b8181msh7a28340b086424ap1ea134jsnfd0b34a491ae',
//     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//   }
// };
//  async function GetMoviesData(){
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
//     SetMoviesdata(response.data)
// } catch (error) {
// 	console.error(error);
// } 
// }
// useEffect(()  => {
//     GetMoviesData();
// },[])

// return (
//     <>
//     <h1> Home</h1>
//     <img src="https://www.freepik.com/free-photos-vectors/movie-banner"/>
//     </>
// );
// }
// }
// export default  HomePage ;
import React from 'react';
function HomePage(){
return (
<>
<h1>home</h1>
<img src="https://www.freepik.com/free-photos-vectors/movie-banner"/>
</>


);
}
export default HomePage;