import React from "react";

const TitleAsJSX = <div>Javascript</div>;
const TitleAsFC = () => <div>Composition</div>;

const UsingJsx = () => (
  <div>
    {TitleAsJSX}
    <TitleAsFC />
    <h1>Using Jsx</h1>
    <h1>React</h1>
    <h1>Node</h1>
  </div>
);

export default UsingJsx;
