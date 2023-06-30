const heading = React.createElement(
    "h1", 
    {
        id: "title",
        font: 2
    }, 
    "React!!!"
);

const Heading1 = React.createElement(
    "h2",
    {

    },
    "Heading1"
);

const Heading2 = React.createElement(
    "h2",
    {

    },
    "Heading2"
);

// adding multiple childerns inside a div
const constainer = React.createElement(
    "div",
    {
        id: "Conatiner"
    },
    [heading, Heading1, Heading2]
);

  // as we are modifying DOM, in react we have to assign root to something
  const root = ReactDOM.createRoot(document.getElementById("root"));
  console.log(heading);
  // passing a react element and render updates the DOM,
  // note, if we have anything in the "root" div, then react replaces them with the element it is rendering
  root.render(constainer);  