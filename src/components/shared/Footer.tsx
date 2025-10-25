import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 px-6 md:px-0 pb-10">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">CreditHub</h3>
          <p className="text-gray-400 mb-4">
            CreditHub is your gateway to thousands of online courses. Upskill
            anytime, anywhere with expert instructors.
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LearnHub. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-white transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/courses/web" className="hover:text-white transition">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/courses/react" className="hover:text-white transition">
                React
              </Link>
            </li>
            <li>
              <Link href="/courses/python" className="hover:text-white transition">
                Python
              </Link>
            </li>
            <li>
              <Link href="/courses/ui" className="hover:text-white transition">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/courses/ai" className="hover:text-white transition">
                AI & ML
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 mb-2">Email: support@learnhub.com</p>
          <p className="text-gray-400 mb-4">Phone: +1 (123) 456-7890</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        Designed & Built with ❤️ by CreditHub Team
      </div>
    </footer>
  );
}
