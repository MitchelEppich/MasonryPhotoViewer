import React from "react";

const Head = props => {
  let { title } = props;

  return (
    <header className="app__head">
      <p> {title} </p>
    </header>
  );
};

export default Head;
