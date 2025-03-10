import Breadcrumb from "@/components/Breadcrumb";
import CourseHeader from "@/components/CourseHeader";
import CourseMaterials from "@/components/CourseMaterials";
import CourseOverview from "@/components/CourseOverview";
import styles from "./page.module.css";
import week1to4 from "@/data/week1to4";
import week5to8 from "@/data/week5to8";
import courseMaterialsData from "@/data/course-materials";
import Comments from "@/components/comments";
import comments from "@/data/comments";
import AddComment from "@/components/comments/AddComment";

const CourseDetails = () => {
  return (
    <div className={styles.courseDetails}>
      <Breadcrumb />
      <div className="container">
        <h1 className={styles.courseTitle}>Starting SEO as your Home</h1>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className="course-content">
            <CourseHeader />
            <CourseMaterials data={courseMaterialsData} />
            <Comments data={comments} />
            <AddComment />
          </div>
          <div>
            <CourseOverview
              title="Week 1-4"
              description="Advanced story telling techniques for writers: Personas, Characters & Plots"
              withProgress={true}
              data={week1to4}
            />
            <CourseOverview
              data={week5to8}
              title="Week 5-8"
              description="Advanced story telling techniques for writers: Personas, Characters & Plots"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
