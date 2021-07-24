import Popup from "./Components/PopUp"
import "./App.css";
import { useState } from "react";
function App() {

  const [open,setOpen] = useState(false); 

  return (
    <div  className="App">
       <div className="navBar">
           <h2>View Audience</h2>
       </div>
       <input className="btn" onClick={()=>setOpen(true)}  type="button" value="Save Segment" />
       {
         (open) ? <Popup control={setOpen} /> : ""
       }
    </div>
  );
}

export default App;
