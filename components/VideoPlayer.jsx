"use client";
import ReactPlayer from "react-player";
import useLocalStorage from "@/hooks/useLocalStorage"; // Adjust the import path
import { useEffect, useState } from "react";

const initialVideoData = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Video 1",
    status: "not-watched",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=p6PuTFmn_ds",
    title: "Video 2",
    status: "not-watched",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=FoCG-WNsZio",
    title: "Video 3",
    status: "not-watched",
  },
];

const VideoPlayer = (props) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useLocalStorage(
    "videoData",
    initialVideoData
  );
  const [watchedVideos, setWatchedVideos] = useLocalStorage(
    "watchedVideos",
    []
  );

  const handleProgress = (videoId, progress) => {
    if (progress.played >= 0.8 && !watchedVideos.includes(videoId)) {
      setVideoData((prevVideoData) =>
        prevVideoData.map((video) =>
          video.id === videoId ? { ...video, status: "watched" } : video
        )
      );
      setWatchedVideos([...watchedVideos, videoId]);
    }

    if (progress.played >= 0.99) {
      console.log("video finished");
      // Move to the next video

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsPlaying(true);
        setCurrentVideoIndex((prevIndex) => prevIndex + 1);
      }, 5000);
    }
  };

  useEffect(() => {
    if (currentVideoIndex >= videoData.length) {
      setCurrentVideoIndex(0);
    }
  }, [currentVideoIndex, videoData.length]);

  const currentVideo = videoData[currentVideoIndex];

  return (
    <div className="video-player" style={{ zIndex: props.isPlaying ? 4 : 0 }}>
      <div className={isLoading ? "video-item loading" : "video-item"}>
        {/* {currentVideo.status === "watched" && <span> ✅</span>} */}
        <ReactPlayer
          url={currentVideo.url}
          controls
          playing={isPlaying || props.isPlaying}
          onProgress={(progress) => handleProgress(currentVideo.id, progress)}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
