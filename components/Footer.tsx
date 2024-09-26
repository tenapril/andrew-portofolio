export function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300 dark:text-gray-400">&copy; 2024 Andrew Tirto Kusumo. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/andrew-tirto-kusumo/" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com/tenapril" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200">GitHub</a>
            {/* <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200">Twitter</a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}