import Link from 'next/link'
import clsx from 'clsx'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Andrew Tirto Kusumo
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'px-3 py-2 rounded-md text-sm font-medium',
                  'text-gray-700 dark:text-gray-300',
                  'hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center ml-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}