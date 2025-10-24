import React from "react";
import {
  BookOpen,
  Target,
  Zap,
  TrendingUp,
  Users,
  Heart,
  CheckCircle,
} from "lucide-react";
import TeamMember from "@/components/pages/about/TeamMember";
import ValuePillar from "@/components/pages/about/ValuePiller";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Hero: Mission Statement */}
      <section className="bg-indigo-700 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Mission: Empowering the Future of Learning
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-indigo-200">
            LearnPro was founded on the belief that high-quality, actionable
            education should be accessible to everyone, everywhere. We connect
            you with top industry experts and project-based courses designed to
            turn knowledge into **real-world impact.**
          </p>
          <div className="mt-8 flex justify-center text-white">
            <BookOpen className="w-8 h-8 mr-2" />
            <span className="text-2xl font-semibold">
              Learn. Apply. Succeed.
            </span>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Core Principles
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              These values guide every course we build and every feature we
              launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValuePillar
              icon={<CheckCircle className="w-6 h-6" />}
              title="Quality First"
              description="Every instructor is rigorously vetted, ensuring you learn from proven experts at the top of their field."
              colorClass="bg-green-500"
            />
            <ValuePillar
              icon={<Target className="w-6 h-6" />}
              title="Practical Skills"
              description="Our curriculum is 100% project-based, focusing on portfolio-ready skills employers are actively seeking."
              colorClass="bg-yellow-500"
            />
            <ValuePillar
              icon={<Users className="w-6 h-6" />}
              title="Active Community"
              description="Learning thrives in collaboration. Our community provides instant support, mentorship, and networking opportunities."
              colorClass="bg-indigo-500"
            />
            <ValuePillar
              icon={<TrendingUp className="w-6 h-6" />}
              title="Continuous Growth"
              description="We constantly update courses and introduce new technologies to keep your knowledge current and competitive."
              colorClass="bg-pink-500"
            />
          </div>
        </div>
      </section>

      {/* The Team Section (Mockup) */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Meet Our Founders & Lead Instructors
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We're a small, passionate team dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <TeamMember
              name="Alex Chen"
              role="Co-founder & CEO"
              imageUrl="https://placehold.co/128x128/9CA3AF/ffffff?text=A.C."
            />
            <TeamMember
              name="Sarah Lee"
              role="Co-founder & CTO"
              imageUrl="https://placehold.co/128x128/9CA3AF/ffffff?text=S.L."
            />
            <TeamMember
              name="Markus Wolf"
              role="Lead Developer Instructor"
              imageUrl="https://placehold.co/128x128/9CA3AF/ffffff?text=M.W."
            />
            <TeamMember
              name="Priya Sharma"
              role="Lead Design Instructor"
              imageUrl="https://placehold.co/128x128/9CA3AF/ffffff?text=P.S."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Browse our catalogue and find the course that defines your future.
          </p>
          <a
            href="#courses"
            className="mt-8 inline-flex items-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-gray-800 bg-white hover:bg-indigo-100 transition-colors transform hover:scale-105"
          >
            Explore Courses
          </a>
        </div>
      </section>
    </div>
  );
};
export default About;
