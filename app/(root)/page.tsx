import CourseList from "@/components/CourseList";
import CourseOverview from "@/components/CourseOverview";
import { sampleCourses } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  const result = await db.select().from(users)
  console.log(JSON.stringify(result, null, 2));
  return (
    <>
      <CourseOverview {...sampleCourses[0]} />

      <CourseList
        title="Latest Courses"
        courses={sampleCourses}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
