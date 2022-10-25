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
    <div>
      <h1 className="mb-4 text-primary">All Courses</h1>
      <div>
        {courses.map((course) => (
          <p key={course.id}>
            <Link
              className="btn btn-outline-info text-decoration-none  text-dark"
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
