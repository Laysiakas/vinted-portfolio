function Skills() {
  const skills = [
    "SQL",
    "Python",
    "Power BI",
    "PostgreSQL",
    "Pandas",
    "Git & GitHub",
    "VS Code",
    "React.js",
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white px-6 py-3 rounded-xl shadow text-blue-700 font-semibold"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
