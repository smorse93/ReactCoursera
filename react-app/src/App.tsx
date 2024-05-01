import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

//  return <div><Message /></div> alternate self closing method for doing the same thing
let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Alert>
        Hello <span>html</span> World
      </Alert>

      <ListGroup
        items={items}
        headings="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="secondary" onClick={() => console.log("clicked")}>
        Primar 1
      </Button>
    </div>
  );
}

export default App;
