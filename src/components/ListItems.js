import { useState } from "react";

function ListItems({ selectedList, setSelectedList }) {
  function checkItem(e, id) {}

  function deleteItem(value, id) {
    let filter = selectedList.filter((item, index) => index !== id);
    console.log(filter);
    setSelectedList(filter);
  }

  return (
    <div>
      {selectedList.map((item, index) => {
        return (
          <div key={index} id={index} className="selected-items">
            <input type="checkbox" onChange={(e) => checkItem(e, index)} />
            <div>{item}</div>
            <button onClick={() => deleteItem(item, index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default ListItems;
