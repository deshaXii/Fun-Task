import React from "react";
import { TbLock } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";

const OverviewItem = ({
  isLocked,
  icon,
  title,
  styles,
  isQuestion,
  questionTitle,
  questionsNumbers,
  questionDuration,
}) => {
  const overviewIcon = icon;
  return (
    <div>
      <div
        className={styles.txtWicon}
        style={{ width: isQuestion ? "100%" : "" }}
      >
        <span className="wicon">
          {overviewIcon ? <overviewIcon /> : <FiFileText />}
        </span>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {!isQuestion ? (
            title && title
          ) : (
            <>
              <span className={styles.quesTitle}>{questionTitle}</span>

              <span className={styles.questions}>{questionsNumbers}</span>
              <span className={styles.time}>{questionDuration}</span>
            </>
          )}
        </p>
      </div>
      {isLocked && <TbLock />}
    </div>
  );
};

export default OverviewItem;
