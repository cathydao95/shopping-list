import Autocomplete from "./components/Autocomplete";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

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
          <Autocomplete listItems={listItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
