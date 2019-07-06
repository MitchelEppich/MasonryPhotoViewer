import React from "react";

const Layout = props => {
  const { children, columns = 5, gap = 10 } = props;

  const columnContainer = {},
    columnOutput = [];

  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;
    if (!columnContainer[columnIndex]) columnContainer[columnIndex] = [];

    columnContainer[columnIndex].push(
      <div
        key={i}
        style={{
          marginBottom: `${gap}px`
        }}
      >
        {children[i]}
      </div>
    );
  }

  for (let i = 0; i < columns; i++) {
    columnOutput.push(
      <div
        key={`column${i}`}
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1
        }}
      >
        {columnContainer[i]}
      </div>
    );
  }

  return <div className="app__container">{columnOutput}</div>;
};

export default Layout;
