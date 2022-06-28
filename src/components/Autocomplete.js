import { useState } from "react";
import ListItems from "./ListItems";

function Autocomplete({ listItems }) {
  const [selectedList, setSelectedList] = useState([]);

  function selectItem(item) {
    setSelectedList((current) => [...current, item]);
  }

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
      <ListItems selectedList={selectedList} setSelectedList={selectedList} />
    </div>
  );
}
export default Autocomplete;
