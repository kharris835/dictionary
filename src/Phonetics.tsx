import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <span className="me-1 ms-1">
      <audio
        className=""
        controls
        controlsList="nodownload noplaybackrate"
        src={props.phonetic.audio}
      ></audio>
      <span className="phoneticText">{props.phonetic.text}</span>
    </span>
  );
}
