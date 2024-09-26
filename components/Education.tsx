import educationData from '@/data/education.json'

export function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Education</h2>
        {educationData.map((edu, index) => (
          <div key={index} className="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{edu.institution}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.degree} in {edu.major}</p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">Concentration: {edu.concentration}</p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">GPA: {edu.gpa}</p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">Period: {edu.period}</p>
            <p className="font-semibold mt-4 text-gray-800 dark:text-white">Thesis:</p>
            <p className="text-gray-700 dark:text-gray-300">{edu.thesis}</p>
            {edu.achievements && edu.achievements.length > 0 && (
              <>
                <p className="font-semibold mt-4 text-gray-800 dark:text-white">Achievements:</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}