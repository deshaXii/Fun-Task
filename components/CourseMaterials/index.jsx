"use client";
import styles from "./index.module.scss";
import MaterialItem from "./Material";

const CourseMaterials = ({ data, id }) => {
  return (
    <section id={id} className={styles.CourseMaterials}>
      <h3 className={styles.sectionTitle}>Course Materials</h3>
      <div className={styles.courseMaterial}>
        {data.map((material) => (
          <MaterialItem key={material.id} material={material} />
        ))}
      </div>
    </section>
  );
};

export default CourseMaterials;
