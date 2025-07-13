import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";



function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">
          Hello Vinted! I’m Edgaras 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
          I'm an aspiring data scientist ready to join your{" "}
          <span className="font-semibold">Data Science & Analytics Academy</span>.
          I specialize in SQL, Python, and storytelling with data.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          See My Work
        </a>
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />
      {/* Contact Section */}
      <Contact />   
    </>
  );
}


export default App;
