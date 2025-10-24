export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-10">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">LearnHub</h3>
          <p className="text-gray-400 mb-4">
            LearnHub is your gateway to thousands of online courses. Upskill anytime, anywhere with expert instructors.
          </p>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/courses" className="hover:text-white transition">Courses</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
          <ul className="space-y-2">
            <li><a href="/courses/web" className="hover:text-white transition">Web Development</a></li>
            <li><a href="/courses/react" className="hover:text-white transition">React</a></li>
            <li><a href="/courses/python" className="hover:text-white transition">Python</a></li>
            <li><a href="/courses/ui" className="hover:text-white transition">UI/UX Design</a></li>
            <li><a href="/courses/ai" className="hover:text-white transition">AI & ML</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 mb-2">Email: support@learnhub.com</p>
          <p className="text-gray-400 mb-4">Phone: +1 (123) 456-7890</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        Designed & Built with ❤️ by LearnHub Team
      </div>
    </footer>
  );
}
