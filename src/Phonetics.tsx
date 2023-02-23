import React from "react";

export default function Phonetics(props) {
  return (
    <span className="me-1">
      <audio
        className=""
        controls
        controlsList="nodownload noplaybackrate"
        src={props.phonetic.audio}
      ></audio>
      {props.phonetic.text}
    </span>
  );
}
