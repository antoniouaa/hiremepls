import React from "react";

export const HorizontalRule = () => {
  return (
    <div
      className="hr"
      backgroundImage={`url(${process.env.PUBLIC_URL}/assets/divider.png`}>
      <hr />
    </div>
  );
};
