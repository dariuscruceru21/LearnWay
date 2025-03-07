import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import CourseCover from "./CourseCover";

const CourseOverview = ({
  title,
  instructor,
  category,
  rating,
  totalEnrollments,
  availableSpots,
  description,
  courseColor,
  courseUrl,
}: Course) => {
  return (
    <section className="course-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="course-info">
          <p>
            By{" "}
            <span className="font-semibold text-light-200">{instructor}</span>
          </p>

          <p>
            Category:
            <span className="font-semibold text-light-200">{category}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className="course-enrollments">
          <p>
            Total Enrollments: <span>{totalEnrollments}</span>
          </p>

          <p>
            Available Spots: <span>{availableSpots}</span>
          </p>
        </div>

        <p className="course-description">{description}</p>

        <Button className="course-overview_btn">
          <Image src="/icons/book.svg" alt="Course" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-100">Enroll</p>
        </Button>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <CourseCover
            variant="wide"
            className="z-10"
            coverColor={courseColor}
            coverImage={courseUrl}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <CourseCover
              variant="wide"
              coverColor={courseColor}
              coverImage={courseUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
