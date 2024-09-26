"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [buttonText, setButtonText] = React.useState("Dark Mode")

  React.useEffect(() => {
    setMounted(true)
    setButtonText(theme === "dark" ? "Light Mode" : "Dark Mode")
  }, [theme])

  if (!mounted) {
    return null
  }

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="sm"
      className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-black dark:text-gray-100 border border-gray-400 dark:border-gray-600 rounded-md px-3 py-1 transition-colors duration-200 shadow-sm"
    >
      {buttonText}
    </Button>
  )
}