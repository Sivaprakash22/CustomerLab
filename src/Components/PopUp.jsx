import {useState} from "react";
import "./Popup.css";
function Popup(props) {
  
 //raw data
  const segmentValues = {
                         first_name : "First Name",
                         last_name : "Last Name",
                         gender : "Gender",
                         age : "Age",
                         account_name : "Account Name",
                         city : "City",
                         state : "State"
                        };
  
  
  const [segmentName, setName] = useState('');                     
  const [segments, setSegments] = useState(Object.values(segmentValues));
  const [blueBox, setBlueBox] = useState([]);


   const addToBlueBoxWithValue = (selectedValue) => {
  
    //filtering the segments
    const remainingSegments = segments.filter((value) => value !== selectedValue);
    
    //Creating dropdown
    let newDropDown = blueBox;
    newDropDown.push(selectedValue);

    //Adding data to Blue Box 
    setBlueBox(newDropDown);
    setSegments(remainingSegments);
  };


  
  const sendToServer = async() => {

    //constructing data for server
    const data = {};
    data.segment_name = segmentName;
    data.schema = [];

    Object.keys(segmentValues).forEach(key =>{
    blueBox.forEach(value => {
           if(segmentValues[key]===value)
           {
             const obj = {}
             obj[key] = value;
             data.schema.push(obj);
           }
      })
    })
 
   //Server Data
   //console.log(data);

   fetch('https://webhook.site/12a9a4fa-3239-48f8-b433-c72532a79eba',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(res=>console.log(res));
    
  }

  return (
    <div className="overlay">
      <div className="popup">
        <div className="header">
          <h3>Saving Segment</h3>
        </div>
        <div className="container">
          <p>Enter the Name of the Segment</p>
          <input
            className="textBox"
            type="text"
            onChange={(e)=>setName(e.target.value)}
            defaultValue={segmentName}
            placeholder=" Name of the Segment"
          />
          <p>
            To save your segment, you need to add the schemas to build the query
          </p>
          <div className="group">
            <p id="green"> - User Traits</p>
            <p id="red"> - Group Traits</p>
          </div>
          <div className="blueBox">
            {
            (blueBox.length!==0) ? (blueBox.map((val, index) => (
              <select>
                <option
                  key={index}
                  defaultValue={val}
                  selected
                  hidden
                  className="opt"
                >
                  {val}
                </option>
                {segments.map((dropDownItem) => (
                  <option
                    key={index + dropDownItem}
                    className="opt"
                    defaultValue={dropDownItem}
                  >
                    {dropDownItem}
                  </option>
                ))}
              </select>
            ))) : <p>No Segments added</p>}
          </div>

          <select id="selectedSegment">
            <option
              defaultValue="Add schema to segment"
              selected
              hidden
              className="opt"
            >
              Add schema to segment
            </option>
            {segments.map((listItem, index) => (
              <option
                className="opt"
                key={index + listItem}
                
                defaultValue={listItem}
              >
                {listItem}
              </option>
            ))}
          </select>

          <button className="addBtn" onClick={(e) => addToBlueBoxWithValue(document.getElementById("selectedSegment").value)}>
            {" "}
            + Add new schema
          </button>

          <div className="footer">
            <button id="save" onClick={()=> sendToServer()} >Save the segment</button>
            <button id="cancel" onClick={()=>props.control(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
