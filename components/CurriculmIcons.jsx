import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbUserQuestion } from "react-icons/tb";
import { FaRegCommentDots, FaJxl } from "react-icons/fa6";

const CurriculmIcons = (props) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    element = null;
  };
  return (
    <div className="curriculm-icons">
      <ul>
        {/* CourseMaterials */}
        <li>
          <a
            href="#course-materials"
            onClick={(e) => handleClick(e, "course-materials")}
          >
            <FaJxl />
          </a>
        </li>
        {/* Comments */}
        <li>
          <a
            href="#course-comments"
            onClick={(e) => handleClick(e, "course-comments")}
          >
            <FaRegCommentDots />
          </a>
        </li>
        <li>
          <a href="#">
            <FaRegQuestionCircle />
          </a>
        </li>
        <li>
          <a href="#">
            <TbUserQuestion />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CurriculmIcons;
