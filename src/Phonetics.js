import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <span className="me-1">
      {props.phonetic.text}
      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        controlsList="play nodownload noplaybackrate nofullscreen"
        className="ms-5"
      />
    </span>
  );
}
