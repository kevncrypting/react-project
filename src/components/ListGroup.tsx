import { useState } from "react"; // This allows us to use the useState hook from the react module

interface Props {
    items: string[]; // items is declared as an array of strings
    heading: string; // heading is declared as a string
    onSelectItem: (item: string) => void; // onSelectItem is a function that takes in an item of type string and returns void - allows for us to accept information from the parent component!
}

// Here, we are defining the ListGroup component and listing the props that it takes in - all components have a props property, and this syntax is destructuring/pulling just the listed properties from there. After the colon is syntax for TypeScript where we explicitly declare the type as Props - this is an optional add on step but helps with catching a lot of potential errors before runtime. This Props type is declared above in an interface, where we list the props and declare what type of value that prop receives
function ListGroup({ items, heading, onSelectItem }: Props) {

  // useState Hook - the first position of the index is a stored value, and the second position is a function used to update that value. The stored value should never be mutated directly, only through use of the updater function! On the right hand side, we can set the default/initial value.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
    {/* heading is dynamic, changed based on the value passed into the component */}
      <h1>{heading}</h1>
      {/* This is a common structure used to catch a default value - in this care, if the length of our items array is 0, then that side evaluates to TRUE and returns the second part of the statement after the && */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
            key={item}
            onClick={() => { setSelectedIndex(index) // when clicked, this function runs and the index of the clicked list item is passed to the setSelectedIndex function, which serves to update the selectedIndex value
            onSelectItem(item)}} // this function is used in the parent component to pass in a handler function - end goal is taking the item that is clicked and printing it to console
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
