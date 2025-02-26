import { Pause, Play } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.audio.current.play(); // Toca automaticamente ao carregar
    }
  }, []);

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
      <button onClick={() => audioRef.current.audio.current.play()}>
          <Play size={25} />
        </button>
      <button onClick={() => audioRef.current.audio.current.pause()}>
          <Pause size={25} />
      </button>
      </div>
    </>

    );
  }