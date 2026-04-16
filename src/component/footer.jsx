function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Fitness<span className="text-red-500">Gym</span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Your journey to a stronger, healthier body starts here.
              Join our community and transform your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">About</li>
              <li className="hover:text-red-500 cursor-pointer">Services</li>
              <li className="hover:text-red-500 cursor-pointer">Trainers</li>
              <li className="hover:text-red-500 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Strength Training</li>
              <li>Cardio Programs</li>
              <li>Personal Coaching</li>
              <li>Yoga Classes</li>
              <li>Nutrition Plans</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 Lagos, Nigeria</li>
              <li>📞 +234 800 000 0000</li>
              <li>📧 info@fitnessgym.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FitnessGym. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;