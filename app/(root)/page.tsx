import CourseList from "@/components/CourseList";
import CourseOverview from "@/components/CourseOverview";
import { Button } from "@/components/ui/button";
import { sampleCourses } from "@/constants";
import Image from "next/image";

const Home = () => (
  <>
    <CourseOverview {...sampleCourses[0]} />
    <CourseList
      title="Latest Courses"
      books={sampleCourses}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
