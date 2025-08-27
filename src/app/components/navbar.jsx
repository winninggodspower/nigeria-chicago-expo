import { useState } from 'react'
import { Menu, X } from "lucide-react"
import CustomButton from "@/components/custom-button"
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={'/'}>
            <img
              src="/ng-chicago-logo.webp"
              alt="NACR Logo"
              width={40}
              height={40}
              className="h-24 w-auto py-4"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={'/event'} className="text-gray-700 hover:text-green-600 font-medium">
              Join
            </Link>
            <Link href={'/event'} className="text-gray-700 hover:text-green-600 font-medium">
              About Us
            </Link>
            <CustomButton variant="outline">Contact Us</CustomButton>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-green-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href={'/event'} className="text-gray-700 hover:text-green-600 font-medium">
                Join
              </Link>
              <Link href={'/event'} className="text-gray-700 hover:text-green-600 font-medium">
                About Us
              </Link>
              <CustomButton variant="outline" className="w-fit">
                Contact Us
              </CustomButton>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
