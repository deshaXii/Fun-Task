import styles from "./index.module.scss";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = () => {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.container}>
        <ul className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <a className={styles.breadcrumbItemLink} href="#">
              Home
            </a>
          </li>
          <div className="arro-box">
            <IoIosArrowForward />
          </div>
          <li className={styles.breadcrumbItem}>
            <a className={styles.breadcrumbItemLink} href="#">
              Courses
            </a>
          </li>
          <div className="arro-box">
            <IoIosArrowForward />
          </div>
          <li className={`${styles.breadcrumbItem} active`}>
            <a className={styles.breadcrumbItemLink} href="#">
              Course Details
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
