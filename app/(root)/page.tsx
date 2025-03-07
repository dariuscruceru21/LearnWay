import CourseList from "@/components/CourseList";
import CourseOverview from "@/components/CourseOverview";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => (
  <>
    <CourseOverview />
    <CourseList />
  </>
);

export default Home;
