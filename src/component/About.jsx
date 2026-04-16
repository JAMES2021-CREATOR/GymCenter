function About() {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Image Side */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            alt="about gym"
            className="rounded-2xl w-full object-cover shadow-lg"
          />
        </div>

        {/* Text Side */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-red-500">Our Gym</span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
            We are more than just a gym. We are a fitness community dedicated to helping
            you achieve your goals, whether it's building muscle, losing weight, or
            improving your overall health.
          </p>

          <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
            With top-tier equipment, certified trainers, and a motivating environment,
            we make fitness enjoyable and effective for everyone.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-3xl font-bold text-red-500">5+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">1000+</h3>
              <p className="text-gray-400 text-sm">Happy Members</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">20+</h3>
              <p className="text-gray-400 text-sm">Professional Trainers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">50+</h3>
              <p className="text-gray-400 text-sm">Workout Programs</p>
            </div>
          </div>

          <button className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;