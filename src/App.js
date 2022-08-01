import React, { useState } from "react";
import CardList from "./CardList";
import Form from "./Form";

function App() {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profile) => {
    setProfiles([...profiles, profile]);
  };
  return (
    <div className="container">
      <div className="header"></div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
