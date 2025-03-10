"use client";
import { FaPlay } from "react-icons/fa";
import CurriculmIcons from "../CurriculmIcons";
import styles from "./index.module.scss";
import VideoPlayer from "../VideoPlayer";
import Image from "next/image";
import { useState } from "react";

const CourseHeader = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className={styles.courseHeader}>
      <div className="course-video-area">
        <div className="course-thumb">
          <Image fill src="/course-45.jpg" alt="course image" />
          <div className="play-video-icon" onClick={() => setIsPlaying(true)}>
            <FaPlay />
          </div>
        </div>
        <VideoPlayer isPlaying={isPlaying} />
      </div>
      <CurriculmIcons />
    </div>
  );
};

export default CourseHeader;
