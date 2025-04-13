function Schedule() {
  const matches = [
    { date: "2025-04-15", teams: "New Zealand vs Australia", time: "19:00" },
    { date: "2025-04-16", teams: "South Africa vs England", time: "20:00" },
    { date: "2025-04-17", teams: "France vs Ireland", time: "18:30" },
  ];

  return (
    <section id="schedule" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Match Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matches.map((match, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">{match.date}</p>
              <p className="text-xl">{match.teams}</p>
              <p className="text-gray-600">{match.time}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Watch Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;