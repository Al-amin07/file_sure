import FeaturedCourse from "@/components/pages/home/FeaturedCourse";
import Header from "@/components/pages/home/Header";
import TestimonialSection from "@/components/pages/home/Testimonial";

export default function Home() {
  return (
    <div className="max-w-7xl px-5 lg:px-0 mt-6 space-y-12 md:space-y-20 mx-auto">
      <Header />
      <FeaturedCourse />
      <TestimonialSection />
    </div>
  );
}
