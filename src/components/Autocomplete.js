import { useState } from "react";
import ListItems from "./ListItems";

function Autocomplete({ listItems }) {
  const [selectedList, setSelectedList] = useState([]);

  //   function to click on item on displayed list and create a new array with clicked(selected) items only
  function selectItem(item) {
    setSelectedList((current) => [...current, item]);
  }

  //   check list received from API and map through each item and display on screen if list exists and greater than 0
  const displayList =
    listItems && listItems.length
      ? listItems.map((item, index) => {
          return (
            <div key={index} id={index} onClick={() => selectItem(item)}>
              {item}
            </div>
          );
        })
      : null;

  return (
    <div>
      <div className="automated-list">{displayList}</div>
      {/* pass list of selectd item list to ListItems Component */}
      <ListItems selectedList={selectedList} setSelectedList={selectedList} />
    </div>
  );
}
export default Autocomplete;
