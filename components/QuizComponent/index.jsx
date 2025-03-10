"use client";
import React, { useState, useEffect } from "react";
import { MdAccessAlarm } from "react-icons/md";
import styles from "./index.module.scss";
import useLocalStorage from "@/hooks/useLocalStorage";

const questions = [
  {
    id: 1,
    question:
      "Among the following states of India, which one has the oldest rock formations in the country?",
    options: ["Asam", "Bahar", "Kamaltake", "Utter Pardesh"],
    correctAnswer: "Kamaltake",
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
];

const QuizComponent = () => {
  const [enabled, setEnabled] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Use useLocalStorage for answers and timeLeft
  const [answers, setAnswers] = useLocalStorage("quizAnswers", {});
  const [timeLeft, setTimeLeft] = useLocalStorage("quizTimeLeft", 600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Update timeLeft in local storage
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, setTimeLeft]);

  const handleAnswer = (option) => {
    const newAnswers = {
      ...answers,
      [currentQuestionIndex]: option,
    };
    setAnswers(newAnswers); // Save the answer to local storage
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <div className={styles.taskHeader}>
        <div className={styles.taskTime}>
          <MdAccessAlarm />
          <span>{formatTime(timeLeft)}</span>
        </div>
        <div className={styles.taskQuestionUn}>
          {questions.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`${styles.quesItemLink} ${
                currentQuestionIndex === index ? styles.active : ""
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.questionBody}>
        <p>
          <span className={styles.quesNum}>{currentQuestionIndex + 1}.</span>
          {currentQuestion.question}
        </p>
        <ul className={styles.answersList}>
          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswer(option)}
              className={`${
                answers[currentQuestionIndex] === option ? styles.active : ""
              }`}
            >
              <div className={styles.customCheckbox}>
                <div className={styles.ccCircle}></div>
              </div>
              <button>{option}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.quesControlBtns}>
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={goToNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;
