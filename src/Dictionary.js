import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="text-center">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
