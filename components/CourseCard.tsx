import Link from "next/link";
import Image from "next/image";
import React from "react";
import CourseCover from "./CourseCover";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const CourseCard = ({
  id,
  title,
  category,
  courseColor,
  courseUrl,
  isFull = false,
}: Course) => (
  <li className={cn(isFull && "xs:w-52 w-full")}>
    <Link
      href={`/courses/${id}`}
      className={cn(isFull && "w-full flex flex-col items-center")}
    >
      <CourseCover coverColor={courseColor} coverImage={courseUrl} />

      <div className={cn("mt-4", !isFull && "xs:max-w-40 max-w-28")}>
        <p className="course-title">{title}</p>
        <p className="course-genre">{category}</p>
      </div>

      {isFull && (
        <div className="mt-3 w-full">
          <div className="course-full">
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-light-100">11 days lefin the Course</p>
          </div>

          <Button className="course-btn">Download receipt</Button>
        </div>
      )}
    </Link>
  </li>
);

export default CourseCard;
