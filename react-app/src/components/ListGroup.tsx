import { MouseEvent, Fragment, useState } from "react";
// { items: [], headings: string }
interface ListGroupsProps {
  items: string[];
  headings: string;
  // (items: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, headings, onSelectItem }: ListGroupsProps) {
  //let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  //let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updater function

  //function
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No items</p> : null;
  // };

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{headings}</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            //onClick={(event) => console.log(city, index, event)}
            //doing it the function calling way waits until runtime to call the function
            //onClick={handleClick}
            //onClick={() => {selectedIndex = index;}}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
