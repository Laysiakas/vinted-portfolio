function Contact() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Let's Connect</h2>
      <p className="text-lg text-gray-600 mb-4">
        I’m currently looking for new challenges and opportunities to grow in data science.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="mailto:edgste@yahoo.com"
          className="text-blue-600 hover:underline"
        >
          Email Me
        </a>
        <a
          href="https://github.com/Laysiakas"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="/Edgaras-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Contact;