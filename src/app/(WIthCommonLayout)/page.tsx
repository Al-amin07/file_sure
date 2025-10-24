import FeaturedCourse from "@/components/pages/home/FeaturedCourse";
import Header from "@/components/pages/home/Header";

export default function Home() {
  return (
    <div className="max-w-7xl mt-6 space-y-20 mx-auto">
      <Header />
      <FeaturedCourse />
    </div>
  );
}
