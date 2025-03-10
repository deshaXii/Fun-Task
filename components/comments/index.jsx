import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const Comments = ({ data }) => {
  return (
    <section className={styles.comments}>
      <h3 className={styles.sectionTitle}>Comments</h3>
      <div className={styles.commentsList}>
        {data.map((comment) => (
          <div className={styles.commentItem} key={comment.id}>
            <div className={styles.commentBy}>
              <Image
                src={comment.image}
                alt={comment.studentName + " image"}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.commentConent}>
              <div className={styles.commentByName}>
                <h4>
                  Student Name: <span>{comment.studentName}</span>
                </h4>
                <span className={styles.commentDate}>{comment.date}</span>
                <p className={styles.commentValue}>{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
