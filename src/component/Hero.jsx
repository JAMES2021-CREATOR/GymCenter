
function Hero() {

  return (
    <>
       <section id="Hero" className="relative bg-black text-white pt-10 ">
      {/* Background overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
          alt="gym"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Body <br />
            <span className="text-red-500">Transform Your Life</span>
          </h1>

          <p className="mt-4 text-gray-300 text-sm md:text-lg max-w-xl">
            Join the best gym in town and start your fitness journey today.
            Train with professional coaches, modern equipment, and a strong community.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition">
              Join Now
            </button>

            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-red-500">
            Today’s Workout Plan
          </h2>

          <ul className="space-y-3 text-sm">
            <li>🔥 Chest & Triceps - 45 mins</li>
            <li>🏃 Cardio - 20 mins</li>
            <li>💪 Abs Training - 15 mins</li>
            <li>🧘 Stretching - 10 mins</li>
          </ul>

          <button className="mt-6 w-full bg-red-600 hover:bg-red-700 py-2 rounded-xl font-semibold transition">
            Start Workout
          </button>
        </div>
      </div>
    </section>
       
    </>
  )
}

export default Hero
