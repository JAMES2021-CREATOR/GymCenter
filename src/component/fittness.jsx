import { useEffect, useState } from "react";

function Stats() {
  const [members, setMembers] = useState(0);
  const [calories, setCalories] = useState(0);
  const [workouts, setWorkouts] = useState(0);
  const [trainers, setTrainers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMembers((prev) => (prev < 1200 ? prev + 20 : 1200));
      setCalories((prev) => (prev < 500000 ? prev + 8000 : 500000));
      setWorkouts((prev) => (prev < 350 ? prev + 5 : 350));
      setTrainers((prev) => (prev < 25 ? prev + 1 : 25));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold">
          Gym <span className="text-red-500">Statistics</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Real numbers from our fitness community
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {/* Members */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-4xl font-bold text-red-500">
              {members}+
            </h3>
            <p className="text-gray-400 mt-2">Active Members</p>
          </div>

          {/* Calories */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-4xl font-bold text-red-500">
              {calories}+
            </h3>
            <p className="text-gray-400 mt-2">Calories Burned</p>
          </div>

          {/* Workouts */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-4xl font-bold text-red-500">
              {workouts}+
            </h3>
            <p className="text-gray-400 mt-2">Workout Programs</p>
          </div>

          {/* Trainers */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-4xl font-bold text-red-500">
              {trainers}+
            </h3>
            <p className="text-gray-400 mt-2">Professional Trainers</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;