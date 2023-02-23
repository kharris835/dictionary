import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("nature");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "2JGZoQ4TqoAIPEwfB415Horej3wlchcAYDoZEqd7Dp2u90GXGMt16Nk8";
    const headers = { Authorization: pexelsApiKey };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  useEffect(() => {
    // Runs on initial render
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "2JGZoQ4TqoAIPEwfB415Horej3wlchcAYDoZEqd7Dp2u90GXGMt16Nk8";
    const headers = { Authorization: pexelsApiKey };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }, []);

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
      <Photos photos={photos} keyword={keyword} />
    </div>
  );
}
