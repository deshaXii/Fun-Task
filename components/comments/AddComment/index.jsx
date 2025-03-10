import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./index.module.scss";

const AddComment = () => {
  return (
    <div className={styles.addComment}>
      <form>
        <textarea placeholder="Write a Comment"></textarea>
        <button className={`${styles.submitBtn} ${styles.btn}`}>
          <span>Submit Review</span>
          <FaArrowRightLong />
        </button>
      </form>
    </div>
  );
};

export default AddComment;
