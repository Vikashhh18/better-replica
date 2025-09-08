import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Better</h3>
            <p className="text-gray-400 mb-4">Better is a family of companies serving all your homeownership needs.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/mortgage-calculator" className="hover:text-white transition-colors">
                  Mortgage calculator
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home affordability calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Free mortgage audit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Learning center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:hello@better.com" className="hover:text-white transition-colors">
                  hello@better.com
                </a>
              </li>
              <li>
                <a href="tel:415-523-8837" className="hover:text-white transition-colors">
                  415-523-8837
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/start" className="hover:text-white transition-colors">
                  Get started
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Better Home & Finance Holding Company. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Licensing
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
