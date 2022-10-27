import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="text-center">
      <h1 className="mb-4 text-info fw-bold">All Courses</h1>
      <div>
        {courses?.map((course) => (
          <p key={course.id}>
            <Link
              className="btn btn-outline-warning text-decoration-none text-info w-50 fw-bold"
              to={`/courses/${course.id}`}
            >
              {course.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
