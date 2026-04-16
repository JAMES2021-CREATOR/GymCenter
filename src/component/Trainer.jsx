function Trainers() {
  const trainers = [
    {
      name: "John Carter",
      role: "Strength Coach",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883"
    },
    {
      name: "Sarah Wilson",
      role: "Yoga Instructor",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      name: "Mike Adams",
      role: "Cardio Specialist",
      img: "https://images.unsplash.com/photo-1550345332-09e3ac987658"
    }
  ];

  return (
    <section id="trainers" className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our <span className="text-red-500">Trainers</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Certified professionals helping you reach your goals
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:scale-105 transition"
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{trainer.role}</p>

                <button className="mt-4 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl text-sm transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Trainers;