import React, { useState, useEffect } from "react";

export default function Homepage(props) {
  const [pageText, setPageText] = useState("");
  const [textIdx, setTextIdx] = useState(0);

  const homepageText = "Welcome to my online portfolio";

  useEffect(() => {
    setTimeout(() => {
      setPageText(homepageText.slice(0, textIdx));
      setTextIdx(textIdx + 1);
    }, 50);
  }, [pageText, setPageText, textIdx, setTextIdx]);

  return <p>{pageText}</p>;
}
