import React from "react";
import Card from "./Card";
function CardList(props) {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default CardList;
