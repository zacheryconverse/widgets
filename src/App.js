import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "What is React?",
//     content: "A front end JS library.",
//   },
//   {
//     title: "Why use React?",
//     content: "It is a favorite among developers.",
//   },
//   {
//     title: "How do you use React?",
//     content: "By creating components.",
//   },
// ];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
      <span style={{color: selected.value, padding: '10px'}}>This text is {selected.value}!</span>
    </div>
  );
};

export default App;
