function Projects() {
    return (
        <section id="projects" className="bg-white py-16 px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>

            <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow p-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    Ecommerce Data Analytics Project
                </h3>
                <p className="text-gray-700 mb-4">
                    This project analyzes ecommerce sales data using <strong>PostgreSQL</strong> and <strong>Python</strong> to uncover insights like best-selling products, revenue trends, and customer behavior. Results were visualized in <strong>Power BI</strong>.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <img src="/sc1.png" alt="Dashboard Page 1" className="rounded shadow" />
                    <img src="/sc2.png" alt="Dashboard Page 2" className="rounded shadow" />
                    <img src="/sc3.png" alt="Dashboard Page 3" className="rounded shadow" />
                </div>

                <a
                    href="https://github.com/Laysiakas/ecommerce-insights-vinted"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-blue-600 hover:underline"
                >
                    View full project on GitHub →
                </a>
            </div>
            {/* Vinted Power BI Dashboard */}
            <div className="bg-white shadow-md rounded-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                    Vinted Power BI Dashboard
                </h3>
                <p className="mb-4 text-gray-700">
                    This project analyzes marketplace data using <strong>PostgreSQL</strong>, <strong>Python</strong>, and <strong>Power BI</strong>.
                    It visualizes insights into user ratings, top-performing categories, and buyer behavior.
                </p>
                <div className="flex gap-4 flex-wrap justify-center mb-4">
                    <img src="/sc1.png" alt="Page 1" className="w-64 rounded shadow" />
                    <img src="/sc2.png" alt="Page 2" className="w-64 rounded shadow" />
                    <img src="/sc3.png" alt="Page 3" className="w-64 rounded shadow" />
                </div>
                <div className="flex gap-4 justify-center">
                    <a
                        href="https://github.com/Laysiakas/vinted-powerbi-dashboard"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View on GitHub →
                    </a>
                    <a
                        href="/dashboard.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Download Dashboard PDF →
                    </a>
                </div>
            </div>

        </section>
    );
}

export default Projects;
