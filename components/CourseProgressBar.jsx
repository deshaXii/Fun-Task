import React from "react";

type Props = {};

const CourseProgressBar = (props: Props) => {
  return (
    <div className="course-progress-bar">
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="progress-info">
        <p className="progress-value">10%</p>
        <span className="progress-point">You</span>
      </div>
    </div>
  );
};

export default CourseProgressBar;
