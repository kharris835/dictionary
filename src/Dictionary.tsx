import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    // console.log(response.data[0].meanings[0].definition[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="container">
      <form className="text-center mt-2 mb-4" onSubmit={search}>
        <input
          autoFocus
          className="search-engine w-100 text-center rounded searchBar pt-2 pb-2"
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
          type="search"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
