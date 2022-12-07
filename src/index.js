import ReactDOM from "react-dom/client";
import React from "react";
import Heading from "./components/Heading";

const Data = [
  { id: "logo", width: 50, height: 50, left: "22px", top: "22px" },
  { id: "smallLogo", width: 25, height: 25, left: "10px", top: "10px" },
  { id: "largeLogo", width: 100, height: 100, left: "50px", top: "50px" },
  {
    id: "centeredLogo",
    width: 50,
    height: 50,
    left: "calc(50% - 25px)",
    top: "calc(50% - 25px)"
  },
  { id: "floatingLogo", width: 25, height: 25, right: "10px", bottom: "10px" },
  {
    id: "leftLogo",
    width: 50,
    height: 50,
    left: "0px",
    top: "calc(50% - 25px)"
  },
  {
    id: "rightLogo",
    width: 50,
    height: 50,
    right: "0px",
    top: "calc(50% - 25px)"
  },
  {
    id: "topLogo",
    width: 50,
    height: 50,
    left: "calc(50% - 25px)",
    top: "0px"
  },
  {
    id: "bottomLogo",
    width: 50,
    height: 50,
    left: "calc(50% - 25px)",
    bottom: "0px"
  }
];

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);

const Draw = () => {
  const [id, setid] = React.useState(0);
  const hj = () => {
    setid(Math.floor(Math.random() * Data.length));
  };

  return (
    <Heading left={Data[id].left} top={Data[id].top} color="red" onClick={hj}>
      Hello
    </Heading>
  );
};
root.render(<Draw />);
