import styles from "./index.module.scss";
import OverviewItem from "./OverviewItem";
import OverviewTitle from "./OverviewTitle";

const CourseOverview = ({ data, withProgress = false, title, description }) => {
  return (
    <div className={styles.courseOverview}>
      {withProgress && <OverviewTitle position="63%" styles={styles} />}
      <div className={styles.boxOver}>
        <div className={styles.week}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.details}>
          {data.map((overviewItem) => (
            <OverviewItem
              key={overviewItem.id}
              {...overviewItem}
              styles={styles}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
