import React, { useEffect, useState } from "react";
import "../App.css";

function ThemeTodo({header,setHeader}) {
  const [theme, setTheme] = useState(false);
  const [reset ,  setReset] = useState(false);
  useEffect(() =>(
    console.log("update theme : ",theme)
  ),[theme]);
  
  const handleChange = (button) => {
    let newTheme = !theme;
    if (button === "button1") {
      setTheme(newTheme);
      setHeader(!header)
      setReset(false);
      document.body.style.background =  "hsl(0, 1%, 32%)";
      //document.body.style.background = newTheme ? "hsl(0, 1%, 32%)" : " ";
      // document.querySelector('h1').style.color = "white";
    }else if (button === "button2") {
      setTheme(newTheme);
      setReset(false);
      document.body.style.background = "#ffffff";
      setHeader(header)
      //document.body.style.background = newTheme ? "#ffffff" : " ";
      // document.querySelector('h1').style.color = "black";
    }
  };
 
  const handleReset = () =>{
      setReset(!reset);
      setTheme(false);
      setHeader(header);
      document.body.style.background = "#dedede";
      console.log("reset page");
    }

  return (
    <div>
      <div className="background-theme">
        <div className="btn-reset">
          <button type="reset" onClick={handleReset}>Reset</button>
        </div>
        <div className="theme">
          <button onClick={() => handleChange("button1")}></button>
          <button onClick={() => handleChange("button2")}></button>
        </div>
      </div>
      <div class="made-with">
            <p>© 2024 - Made with ❤️ by <span><a  href= "https://github.com/YassineInbach" target="_blank">Yassine Inbach</a></span></p>
        </div>
    </div>
  );
}

export default ThemeTodo;
