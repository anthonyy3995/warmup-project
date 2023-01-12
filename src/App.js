import { useState } from "react";
import "./App.css"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// import Connector from './signalRConnection.js'

function App() {

  // var connection = connection = new signalR.HubConnectionBuilder()
  //   .withUrl(URL)
  //   .withAutomaticReconnect()
  //   .build();

  // connection.on("ReceiveMessage", function (category, value) {
  //   // var li = document.createElement("li");
  //   // document.getElementById("messagesList").appendChild(li);

  //   // We can assign user-supplied strings to an element's textContent because it
  //   // is not interpreted as markup. If you're assigning in any other way, you 
  //   // should be aware of possible script injection concerns.
  //   console.log(`category: ${category} value: ${value}`);
  // });

  //TODO: fetch from db
  const categories = [
    'categoryOne', 'categoryTwo', 'categoryThree'
  ];

  const defaultOption = categories[0];
  const [selectedCat, setSelectedCat] = useState(defaultOption)
  const [selectedSubCat, setSelectedSubCat] = useState(defaultOption)
  const [value, setValue] = useState("")

  const handlePublish = () => {
    console.log("Publishing content " + value + " of type " + selectedCat)
    //TODO: add item to db
    //connection.invoke("SendMessage", user, message);

  }

  const handleSubscribe = () => {
    console.log("Subscribing to " +  selectedSubCat)
    //TODO: subscribe in db

  }

  return (
    <div className="app">
      <h1 className="header"> Warmup Project B </h1>
      <h2 style={{ "backgroundColor": "#EAFAF9", "padding": "20px", "marginBottom": "0px"}}>
        Upload Content
      </h2>
      <div className="createBlock">
        <div className="category">
          <h3>Select a Category</h3>
          <Dropdown className='catDropdown' options={categories} onChange={(e) => setSelectedCat(e.value)} value={selectedCat} placeholder="Select a Category" />
        </div>
        <div className="content">
          <h3>Enter a Value</h3>
          <input 
            onChange={(e) => setValue(e.target.value)}
            value={value}>
            </input>
        </div>
        <button className="button" onClick={handlePublish}>Publish</button>

      </div>
      <h2 style={{ "backgroundColor": "#C1EDFA", "padding": "20px", "marginBottom": "0px" }}>
        Subscribe to Content
      </h2>
      <div className="subBlock">
        <div className="category">
          <h3>Select a Category</h3>
          <Dropdown className='catDropdown' options={categories} onChange={(e) => setSelectedSubCat(e.value)} value={selectedSubCat} placeholder="Select a Category" />
        </div>
        <button className="button" onClick={handleSubscribe}>Subscribe</button>

      </div>
    
    </div>
  );
}

export default App;
