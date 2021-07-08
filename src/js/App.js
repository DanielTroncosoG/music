import { useState,useEffect } from "react";
import Reproductor from "./component/Reproductor"

function App() {
  const [list,setList] = useState({
    songs : null
  });

    async function ask(){
    try {
      const response = await fetch("https://assets.breatheco.de/apis/sound/songs",{
        method : "GET",
        headers : {
          "Content-Type" : "application/json"
        }

      });
      if(response.status ===404) throw new Error ("Page not found");

      const data = await response.json();
      console.log(data);
      setList({
        
        songs : data});
        
     
    } catch (error) {
      console.log(error);
    }

  
  }

   useEffect(()=>{
    ask();
    
  },[]);
  
  return(
    <>
     <Reproductor list={list.songs}/>  
    </>
  )
}

export default App;