"use client";
import React, { useState } from "react";
import { TbLock } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import QuizComponent from "@/components/QuizComponent";

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
  let [isOpen, setIsOpen] = useState(false);
  let taskTime;
  if (questionDuration) {
    taskTime = Number(questionDuration.replace("MINUTES", ""));
    console.log(taskTime, "asdad");
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="taskPopup">
          <QuizComponent taskTime={taskTime ? taskTime : 10} />
        </div>
      </Dialog>
      <div
        className={styles.txtWicon}
        style={{ width: isQuestion ? "100%" : "" }}
      >
        <span className="wicon">
          {overviewIcon ? <overviewIcon /> : <FiFileText />}
        </span>
        <p
          style={{
            width: "100%",
          }}
        >
          {!isQuestion ? (
            title && title
          ) : (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
              onClick={() => setIsOpen(true)}
            >
              <span className={styles.quesTitle}>{questionTitle}</span>

              <span className={styles.questions}>{questionsNumbers}</span>
              <span className={styles.time}>{questionDuration}</span>
            </span>
          )}
        </p>
      </div>
      {isLocked && <TbLock />}
    </div>
  );
};

export default OverviewItem;
