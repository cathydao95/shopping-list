import Autocomplete from "./components/Autocomplete";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [listItems, setListItems] = useState([]);

  // function to set handle input change
  function handleChange(event) {
    setInput(event.target.value);
  }

  // use input from handle change to automate shopping list items from API and set list
  useEffect(() => {
    fetch(`https://api.frontendeval.com/fake/food/${input}`)
      .then((res) => res.json())
      .then((data) => setListItems(data));
  }, [input]);

  console.log(listItems);

  return (
    <div>
      <div className="container">
        <h1>My Shopping List</h1>
        <div className="input-container">
          <input type="text" onChange={handleChange} />
          {/* pass list items from API to Autocomplete Component*/}
          <Autocomplete listItems={listItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
