import projectsData from '@/data/projects.json'

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.date}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
              {project.achievements && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Achievements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}