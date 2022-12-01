import React from "react";
import { useState, useEffect } from "react";
import './search.css';
import '../App.css';
import axios from "axios";

const Search = (props) => {
   const [searchImg, setSearchImg] = useState("");
   const [image, setImage] = useState([]);

   const searchPhoto = (e) => {
      e.preventDefault();
   };

   useEffect(()=>{
        axios.get("https://api.unsplash.com/photos/?client_id=FoLLuIVdQ-ClXSnlUSEct5p-_ocx1i_xC6ZogAYsuDM")
        .then((resp)=>{
          // setImage(resp.image)
          // console.log(resp.image)
          console.log(resp.data)
          setImage(resp.data)
        })
      },[])

   return (
      <div>
      <div className="bottom">

         <input
            type="text"
            name="search-box"
            id="searchbar"
            placeholder="Search free high resolution images"
         />
         <button className="search" onClick={searchPhoto}>Search</button>
      </div>
      <div className="image-container">{
        image.map((item)=>{
          return <div>{setImage.data}</div>
        })}
      </div>
      </div>
   );
};

export default Search;

