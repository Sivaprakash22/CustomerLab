import { useState,useEffect } from "react";
import "./Popup.css"
function Popup() {

 const [segments,setSegments] = useState(["First Name", "Last Name","Gender"," Age","Account Name","City","State"]) 
 const [blueBox,setBlueBox] = useState([segments]);

 const addDropDownToBlueBox =()=>{
   let newDropDown = blueBox;
   newDropDown.push(segments);
   console.log(newDropDown);
   setBlueBox([...newDropDown]);
 }

  // useEffect(()=>{
     
  // },[blueBox])


  return (
    <div className="overlay">
    <div className="popup">
      <div className="header">
          <h3>Saving Segment</h3>
      </div>
      <div className="container">
         <p>Enter the Name of the Segment</p>
         <input className="textBox" type="text"  defaultValue="" placeholder=" Name of the Segment"/>
         <p>To save your segment, you need to add the schemas to build  the query</p>
         <div className="group">
             <p id="green"> - User Traits</p>
             <p id="red"> - Group Traits</p>
         </div>

        <div className="blueBox">
        {
           blueBox.map((dropDown,index) =>
            <select>
                  <option key={index} defaultValue="Add schema to segment" selected hidden className="opt">Add schema to segment</option>
                  {
                    dropDown.map(dropDownItem=><option key={index+dropDownItem} className="opt" defaultValue={dropDownItem}>{dropDownItem}</option>)
                  }
            </select>)
        }
        </div>

        <select >
             <option defaultValue="Add schema to segment" selected hidden className="opt">Add schema to segment</option>
             <option className="opt">First Name</option>
        </select>


        <button className="addBtn" onClick={()=>addDropDownToBlueBox()} > + Add new schema</button>

       <div className="footer">
       <button id="save">Save the segment</button>
       <button id="cancel">Cancel</button>
       </div>
      </div>

     
  
      
    </div>
    </div>
  );
}

export default Popup;
