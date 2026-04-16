function Pricing() {
  return (
    <section id="Pricing" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Membership Plans
        </h2>
        <p className="text-gray-400 mb-12">
          Choose the plan that fits your fitness journey
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Basic */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 
                          hover:scale-105 hover:border-red-500 
                          transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-6">
              ₦15,000<span className="text-lg">/mo</span>
            </p>

            <ul className="text-gray-400 space-y-3 mb-8">
              <li>✔ Gym equipment access</li>
              <li>✔ Locker room</li>
              <li className="line-through text-gray-600">Personal trainer</li>
              <li className="line-through text-gray-600">Group classes</li>
            </ul>

            <button className="w-full bg-red-600 py-3 rounded-lg 
                               hover:bg-red-700 active:scale-95 
                               transition duration-300">
              Get Started
            </button>
          </div>

          {/* Standard (Main Focus) */}
          <div className="relative bg-gradient-to-br from-red-600 to-red-800 
                          p-8 rounded-2xl shadow-2xl scale-105
                          hover:scale-110 transition duration-300">

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl 
                            bg-red-500 opacity-20 blur-xl"></div>

            {/* Badge */}
            <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-2xl font-semibold mb-4 relative z-10">
              Standard
            </h3>

            <p className="text-4xl font-bold mb-6 relative z-10">
              ₦25,000<span className="text-lg">/mo</span>
            </p>

            <ul className="text-white space-y-3 mb-8 relative z-10">
              <li>✔ Gym equipment access</li>
              <li>✔ Locker room</li>
              <li>✔ Group classes</li>
              <li className="line-through opacity-70">Personal trainer</li>
            </ul>

            <button className="w-full bg-black py-3 rounded-lg 
                               hover:bg-gray-900 active:scale-95 
                               transition duration-300 relative z-10">
              Get Started
            </button>
          </div>

          {/* Premium */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 
                          hover:scale-105 hover:border-red-500 
                          transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-6">
              ₦45,000<span className="text-lg">/mo</span>
            </p>

            <ul className="text-gray-400 space-y-3 mb-8">
              <li>✔ Gym equipment access</li>
              <li>✔ Locker room</li>
              <li>✔ Group classes</li>
              <li>✔ Personal trainer</li>
            </ul>

            <button className="w-full bg-red-600 py-3 rounded-lg 
                               hover:bg-red-700 active:scale-95 
                               transition duration-300">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;