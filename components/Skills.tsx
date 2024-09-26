import skillsData from '@/data/skills.json'

const skillLevelColors = {
  'Basic': 'bg-blue-200 dark:bg-blue-800',
  'Intermediate': 'bg-blue-300 dark:bg-blue-700',
  'Advanced': 'bg-blue-400 dark:bg-blue-600',
  'Expert': 'bg-blue-500 dark:bg-blue-500',
  'Native': 'bg-blue-600 dark:bg-blue-400',
  'Full proficiency': 'bg-blue-600 dark:bg-blue-400'
}

const getSkillLevelWidth = (level: string) => {
  switch (level) {
    case 'Basic': return 'w-1/4'
    case 'Intermediate': return 'w-1/2'
    case 'Advanced': return 'w-3/4'
    case 'Expert': return 'w-full'
    case 'Native': return 'w-full'
    case 'Full proficiency': return 'w-full'
    default: return 'w-0'
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.categories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">{category.name}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${skillLevelColors[skill.level as keyof typeof skillLevelColors]} ${getSkillLevelWidth(skill.level)}`}
                      ></div>
                    </div>
                    {skill.certification && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Certification: {skill.certification}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}