import CourseList from "@/components/CourseList";
 import CourseOverview from "@/components/CourseOverview";
import { sampleCourses } from "@/constants";

const Home = () => (
  <>
    <CourseOverview {...sampleCourses[0]} />
    <CourseList
      title="Latest Courses"
      courses={sampleCourses}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
