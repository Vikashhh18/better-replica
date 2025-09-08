"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    { href: "/start", label: "Start" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-green-600 hover:text-green-700 transition-colors focus-enhanced"
            >
              Better
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 relative focus-enhanced ${
                  pathname === item.href ? "text-green-600" : "text-gray-700"
                }`}
              >
                {item.label}
                {pathname === item.href && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-green-600"></div>}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600 focus-enhanced">
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden lg:inline">Call us</span>
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white focus-enhanced">
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-600 focus-enhanced"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-green-600 hover:bg-green-50 rounded-md focus-enhanced ${
                    pathname === item.href ? "text-green-600 bg-green-50" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-gray-700 hover:text-green-600 focus-enhanced"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call us
                </Button>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white focus-enhanced">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
