"use client"

import { Button } from "./ui/button"
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export function Hero() {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to the path of the CV file in the public directory
    link.href = '/CV-AndrewT-updated202409.pdf';
    // Set the download attribute to force download instead of navigation
    link.download = 'Andrew_Tirto_Kusumo_CV.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-28 pb-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">👨‍💻 Andrew Tirto Kusumo</h1>
          <h2 className="text-2xl mb-6 text-gray-700 dark:text-gray-300">🚀 Senior Data Engineer</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">🔧 A <strong>Data Plumber</strong> with a big enthusiasm for making my team work <strong>faster</strong> and <strong>better</strong>. Also love <strong>analyzing data</strong> and <strong>wrangling</strong> with them. 🎢</p>
          <div className="mb-8">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              💡 I am a <strong>passionate Senior Data Engineer</strong> with extensive experience in developing and optimizing data pipelines, implementing ETL processes, and managing cloud-based data infrastructure.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              🛠️ My expertise spans across various tools and technologies including <strong>Airflow</strong> 🌬️, <strong>DBT</strong> 🧱, <strong>Google BigQuery</strong> 🔍, <strong>Python</strong> 🐍, <strong>Docker</strong> 🐳, and more. I have a strong track record of <strong>improving development efficiency</strong> and <strong>reducing costs</strong> in data management. 📊💰
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <Button size="lg" onClick={handleDownloadCV} className="w-44 h-12 flex items-center justify-center text-sm">
              📄 Download CV
            </Button>
            <Link href="https://www.linkedin.com/in/andrew-tirto-kusumo/" target="_blank" rel="noopener noreferrer" passHref>
              <Button size="lg" className="w-44 h-12 bg-[#0077B5] hover:bg-[#006699] flex items-center justify-center text-sm">
                <FaLinkedin className="mr-2" /> LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/tenapril" target="_blank" rel="noopener noreferrer" passHref>
              <Button size="lg" className="w-44 h-12 bg-[#333] hover:bg-[#24292e] flex items-center justify-center text-sm">
                <FaGithub className="mr-2" /> GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}