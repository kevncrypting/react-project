import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]; // test data for the population of the unordered list

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items} // passing in the items array above
        heading="Cities" // passing in the string "Cities"
        onSelectItem={handleSelectItem} // in the component, there is a function called onSelectItem that takes in an item and returns void. Here, when the function onSelectItem is run, it also runs the handler function defined above, which prints the item to the console
      />
    </div>
  );
}

export default App;
