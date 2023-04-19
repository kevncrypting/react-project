import { MouseEvent } from "react"; // allows for type definition on line 7, feature of typescript

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]; // test data for the population of the unordered list

  // Event handler: whenever we want to handle an event (in this case, onClick of the list items), we want to move the logic into its own function to improve readability
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick} // important to note, this function is not called here! It will only be called/invoked when the click event happens
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
