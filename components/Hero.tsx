"use client"

import { Button } from "./ui/button"
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import Link from 'next/link'

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-AndrewT-updated202409.pdf';
    link.download = 'Andrew_Tirto_Kusumo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">👨‍💻 Andrew Tirto Kusumo</h1>
          <h2 className="text-2xl mb-6 text-gray-700 dark:text-gray-300">🚀 Senior Data Engineer</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">🔧 A <strong>Data Plumber</strong> with a big enthusiasm for making my team work <strong>faster</strong> and <strong>better</strong>. Also love <strong>analyzing data</strong> and <strong>wrangling</strong> with them. 🎢</p>
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              💡 I am a <strong>passionate Senior Data Engineer</strong> with extensive experience in developing and optimizing data pipelines, implementing ETL processes, and managing cloud-based data infrastructure.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              🛠️ My expertise spans across various tools and technologies including <strong>Airflow</strong> 🌬️, <strong>DBT</strong> 🧱, <strong>Google BigQuery</strong> 🔍, <strong>Python</strong> 🐍, <strong>Docker</strong> 🐳, and more. I have a strong track record of <strong>improving development efficiency</strong> and <strong>reducing costs</strong> in data management. 📊💰
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button size="lg" onClick={handleDownloadCV} className="w-44 h-12 flex items-center justify-center text-sm">
              <FaFileDownload className="mr-2 text-lg" />
              <span className="hidden sm:inline">Download CV</span>
            </Button>
            <Link href="https://www.linkedin.com/in/andrew-tirto-kusumo/" target="_blank" rel="noopener noreferrer" passHref>
              <Button size="lg" className="w-44 h-12 bg-[#0077B5] hover:bg-[#006699] flex items-center justify-center text-sm">
                <FaLinkedin className="mr-2 text-lg" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://github.com/tenapril" target="_blank" rel="noopener noreferrer" passHref>
              <Button size="lg" className="w-44 h-12 bg-[#333] hover:bg-[#24292e] flex items-center justify-center text-sm">
                <FaGithub className="mr-2 text-lg" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}