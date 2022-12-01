import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
   const [image, setImage] = useState("");
   const [result, setResult] = useState([]);

   const fetchAPI = () => {
      axios
         .get(
            `https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=FoLLuIVdQ-ClXSnlUSEct5p-_ocx1i_xC6ZogAYsuDM`
         )
         .then((res) => {
            // console.log(res.data);
            // console.log(res.data.urls);

            setResult(res.data.results);
         });
   };
   return (
      <div className="container">
         <div className="wrapper">
            <div className="top">
               <h1>React Photo Search </h1>
               <button className="bookmark">Bookmarks</button>
            </div>
            <div className="bottom">
               <input
                  type="text"
                  className="searchbox"
                  name="searchbox"
                  id="searchbar"
                  value={image}
                  onChange={(event) => {
                     setImage(event.target.value);
                  }}
                  placeholder="Search high resolution images"
               />
               <button className="search" type="submit" onClick={fetchAPI}>
                  Search
               </button>
            </div>

            <div className="container">
               <div className="image-container">
                  {result.map((value) => {
                     return (
                        <div className="stack">
                           <img
                              className="img"
                              src={value.urls.small}
                              alt="img"
                           />
                           {/* <div>
                  <button className="bookmark" id="book">Bookmark</button></div> */}
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
