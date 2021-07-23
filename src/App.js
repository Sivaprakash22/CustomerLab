import Popup from "./Components/PopUp"
import "./App.css";
function App() {
  return (
    <div  className="App">
       <div className="navBar">
           <h2>View Audience</h2>
       </div>
       <input className="btn"  type="button" value="Save Segment" />
       <Popup />
    </div>
  );
}

export default App;
