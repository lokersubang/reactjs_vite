import React, { useState } from "react";
import PlaceContentCenter from "./assets/components/PlaceContentCenter";
import Button from "./assets/components/Button";

const App = () => {
  const [name, setName] = useState("Dadan Nurmaulana");
  function handleClick() {
    setName("Idris Maulana");
  }
  return (
    <PlaceContentCenter>
      <div>{name}</div>
      <Button onClick={handleClick}>Change Name</Button>
    </PlaceContentCenter>
  );
};

export default App;
