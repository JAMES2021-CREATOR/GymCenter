function Programs() {
  return (
    <section id="programs" className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Everything you need to reach your fitness goals
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition border border-gray-800">
            <h3 className="text-xl font-semibold text-red-500">Strength Training</h3>
            <p className="text-gray-400 mt-3 text-sm">
              Build muscle and increase power with professional equipment and coaches.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition border border-gray-800">
            <h3 className="text-xl font-semibold text-red-500">Cardio Programs</h3>
            <p className="text-gray-400 mt-3 text-sm">
              Burn fat and improve endurance with guided cardio workouts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition border border-gray-800">
            <h3 className="text-xl font-semibold text-red-500">Personal Training</h3>
            <p className="text-gray-400 mt-3 text-sm">
              Get one-on-one coaching tailored to your fitness goals.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition border border-gray-800">
            <h3 className="text-xl font-semibold text-red-500">Nutrition Plan</h3>
            <p className="text-gray-400 mt-3 text-sm">
              Custom meal plans to help you gain muscle or lose weight.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition border border-gray-800">
            <h3 className="text-xl font-semibold text-red-500">Group Classes</h3>
            <p className="text-gray-400 mt-3 text-sm">
              High-energy group workouts that keep you motivated.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition border border-gray-800">
            <h3 className="text-xl font-semibold text-red-500">Yoga & Recovery</h3>
            <p className="text-gray-400 mt-3 text-sm">
              Improve flexibility, reduce stress, and recover faster.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Programs;