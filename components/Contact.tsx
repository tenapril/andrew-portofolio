import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}