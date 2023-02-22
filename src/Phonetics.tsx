import React from "react";

export default function Phonetics(props) {
  return (
    <span className="me-1">
      {props.phonetic.text}
      <audio
        className="ms-5"
        controls
        controlsList="nodownload noplaybackrate"
        src={props.phonetic.audio}
      ></audio>
    </span>
  );
}
