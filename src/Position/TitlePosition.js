import React from "react";

const positions = [
  { left: "0px", bottom: "0px" },
  { left: "50px", bottom: "0px" },
  { left: "100px", bottom: "0px" },
  { left: "0px", top: "50px" },
  { left: "50px", bottom: "50px" },
  { left: "100px", bottom: "50px" },
  { left: "0px", bottom: "100px" },
  { left: "50px", bottom: "100px" },
  { left: "100px", bottom: "100px" }
];

function TitlePosition() {
  return (
    <div>
      {positions.map((posi, index) => (
        <h1 key={index} style={{ ...posi, position: "absolute" }}>
          My heading
        </h1>
      ))}
    </div>
  );
}

export default TitlePosition;
