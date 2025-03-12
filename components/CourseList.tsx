import React from "react";
import CourseCard from "./CourseCard";

interface Props {
  title: string;
  courses: Course[];
  containerClassName?: string;
}

const CourseList = ({ title, courses, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100"> {title}</h2>

      <ul className="course-list">
        {courses.map((course) => (
          <CourseCard key={course.title}  {...course}/>
        ))}
      </ul>
    </section>
  );
};

export default CourseList;
