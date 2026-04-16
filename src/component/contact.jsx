function Contact() {
  return (
    <section id="contact" className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Join <span className="text-red-500">Our Gym</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Fill the form below and start your fitness journey today
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Info */}
          <div>
            <h3 className="text-2xl font-semibold text-red-500">
              Get in Touch
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              We are ready to help you achieve your fitness goals.
              Contact us for membership plans, training programs, or any inquiries.
            </p>

            <div className="mt-6 space-y-3 text-gray-300 text-sm">
              <p>📍 Location: Lagos, Nigeria</p>
              <p>📞 Phone: +234 800 000 0000</p>
              <p>📧 Email: info@fitnessgym.com</p>
            </div>
          </div>

          {/* Form */}
          <form className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            />

            <select
              className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Select Program</option>
              <option>Strength Training</option>
              <option>Cardio Program</option>
              <option>Personal Training</option>
              <option>Yoga Class</option>
            </select>

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;