import React from "react";

const OverviewTitle = ({ styles, position = "0%" }) => {
  return (
    <>
      <h2>Topics for This Course</h2>
      <div className={styles.progress}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: position }}
          ></div>
        </div>
        <span className={styles.progressText} style={{ left: position }}>
          <div className={styles.uMark}>
            <span>You</span>
          </div>
          <span>{position}</span>
        </span>
      </div>
    </>
  );
};

export default OverviewTitle;
