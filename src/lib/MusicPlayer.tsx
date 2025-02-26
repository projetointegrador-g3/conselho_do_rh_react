import { Pause, Play, SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function MusicPlayer() {
  
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.audio.current.play(); // Toca automaticamente ao carregar
      setIsPlaying(true);
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      const audio = audioRef.current.audio.current;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

    return (
      <>
        <AudioPlayer
        ref={audioRef}
        src="../../public/The Office (US) - Intro.mp3"
        autoPlay
        volume={0.1}
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledProgress={false}
        showFilledVolume={false}
        showSkipControls={false}
        style={{ display: "none" }} // Esconde o player
      />

      <div className="p-2 text-gray-500">
        <button onClick={togglePlayPause}>
          {isPlaying ? <SpeakerHigh size={30} weight="fill" /> : <SpeakerSlash size={30} weight="fill" />}
        </button>
      </div>
    </>

    );
  }