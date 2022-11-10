import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import CourseCard from "./CourseCard";

const Courses = () => {

  const [courses, setCourses] = useState([]);
  // console.log(courses)

  useEffect(() => {
    fetch("https://meet-your-trainer-server-atik2788.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setCourses(data));

  }, []);

  return (
    <div className="lg:grid lg:grid-cols-3 mx-auto gap-5 mt-10 mb-20">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Courses;
