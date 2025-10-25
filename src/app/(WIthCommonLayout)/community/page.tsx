import React from "react";
import {
  Users,
  MessageSquare,
  Award,
  Zap,
  Heart,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Community Hero Section */}
      <section className="bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
            Our Global Learning Network
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Connect, Collaborate, Conquer.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Learning is better together. Join the **LearnPro Community**—a space
            for students, mentors, and experts to share knowledge, find
            accountability partners, and celebrate successes.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a
              href="#join-now"
              className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full transition-shadow duration-300 hover:bg-indigo-700 shadow-xl shadow-indigo-500/50 flex items-center"
            >
              <Users className="w-5 h-5 mr-2" /> Join the Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              What You Gain
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The community is designed to accelerate your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Instant Help"
              description="Get your course questions answered in minutes, not days. Connect directly with TAs and high-achieving peers."
            />
            <FeatureCard
              icon={<Award className="w-6 h-6" />}
              title="Career Mentorship"
              description="Access exclusive channels with industry veterans who can provide resume reviews, interview tips, and career guidance."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Accountability Groups"
              description="Form small study pods with dedicated peers to stay motivated, tackle challenging projects, and hit deadlines together."
            />
          </div>
        </div>
      </section>

      {/* Connection Channels Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-left text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Where We Connect
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl lg:mx-0 mx-auto">
              We offer multiple ways to engage, ensuring you can participate in
              the format that works best for you.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Channel 1: Forum */}
            <div className="flex flex-col bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-indigo-600">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Official Forum
                </h3>
              </div>
              <p className="text-gray-600 flex-grow mb-4">
                The hub for structured discussions, deep-dive project feedback,
                and searchable knowledge base threads.
              </p>
              <a
                href="#forum-link"
                className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center"
              >
                Explore the Forum <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>

            {/* Channel 2: Live Chat */}
            <div className="flex flex-col bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-yellow-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Real-Time Chat
                </h3>
              </div>
              <p className="text-gray-600 flex-grow mb-4">
                For quick questions, casual networking, and attending live Q&A
                sessions with course instructors.
              </p>
              <a
                href="#chat-link"
                className="text-yellow-600 font-semibold hover:text-yellow-800 flex items-center"
              >
                Join Live Chat <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>

            {/* Channel 3: Local Meetups */}
            <div className="flex flex-col bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-pink-500">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  In-Person Events
                </h3>
              </div>
              <p className="text-gray-600 flex-grow mb-4">
                Connect with local peers through organized study groups and
                community meetups in major cities globally.
              </p>
              <a
                href="#meetups-link"
                className="text-pink-600 font-semibold hover:text-pink-800 flex items-center"
              >
                Find a Meetup <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Ready to Level Up Your Learning?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-indigo-200">
            The community is waiting for you to jump in.
          </p>
          <a
            href="#signup"
            className="mt-8 inline-flex items-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-indigo-700 bg-white hover:bg-indigo-50 transition-colors transform hover:scale-105"
          >
            Sign Up & Join Today
          </a>
        </div>
      </section>
    </div>
  );
};
export default Community;
