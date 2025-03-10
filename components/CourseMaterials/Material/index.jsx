import styles from "./index.module.scss";
const MaterialItem = ({ material }) => {
  const IconComponent = material.icon;

  return (
    <div key={material.id} className={styles.cmItem}>
      <div className={styles.cmTxt}>
        <div className={styles.cmWicon}>
          {IconComponent ? (
            IconComponent
          ) : (
            <span className={styles.noIcon}></span>
          )}
        </div>
        <span>{material.title}:</span>
      </div>
      <div className={styles.cmValue}>
        <span>{material.value}</span>
      </div>
    </div>
  );
};

export default MaterialItem;
