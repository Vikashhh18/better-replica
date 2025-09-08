import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ResponsiveWrapper } from "@/components/responsive-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <ResponsiveWrapper variant="hero">
          <div className="text-center">
            <h1 className="responsive-text-hero font-bold text-gray-900 mb-4 sm:mb-6 text-balance">
              The rate you deserve
            </h1>
            <p className="responsive-text-subheading text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto text-pretty">
              Proud to serve all 50 states with our digital-first approach to mortgages
            </p>
            <div className="responsive-flex-stack gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
              <Button
                size="lg"
                className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg btn-hover-lift focus-enhanced w-full sm:w-auto"
              >
                Start my approval
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 cursor-pointer text-green-600 hover:bg-green-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent btn-hover-lift focus-enhanced w-full sm:w-auto"
              >
                Get rate quote
              </Button>
            </div>
          </div>
        </ResponsiveWrapper>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50">
        <ResponsiveWrapper variant="section">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">$100B+</div>
              <p className="text-gray-600 text-sm sm:text-base">funded in loans</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">400K+</div>
              <p className="text-gray-600 text-sm sm:text-base">customers served</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center items-center mb-2">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mr-2">4.6</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">Trustpilot rating</p>
            </div>
          </div>
        </ResponsiveWrapper>
      </section>

      {/* Features Section */}
      <ResponsiveWrapper variant="section">
        <h2 className="responsive-text-heading font-bold text-center text-gray-900 mb-12 sm:mb-16 text-balance">
          Find out why we're better
        </h2>
        <div className="responsive-grid-features gap-6 sm:gap-8">
          <Card className="border-0 shadow-lg card-hover">
            <CardContent className="p-6 sm:p-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Buy a home</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                With conventional and jumbo loans starting at 2.87% APR
              </p>
              <Button variant="link" className="text-green-600 cursor-pointer p-0 focus-enhanced">
                Start my approval <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg card-hover">
            <CardContent className="p-6 sm:p-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Refinance</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Get a lower monthly payment or cash out with rates starting at 2.87% APR
              </p>
              <Button variant="link" className="text-green-600 p-0 cursor-pointer focus-enhanced">
                Start my approval <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg card-hover">
            <CardContent className="p-6 sm:p-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">HELOC</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Unlock your home equity with rates starting at 5.00% APR
              </p>
              <Button variant="link" className="text-green-600 cursor-pointer p-0 focus-enhanced">
                Start my approval <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </ResponsiveWrapper>

      {/* CTA Section */}
      <section className="bg-green-600">
        <ResponsiveWrapper variant="section">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="responsive-text-heading font-bold text-white mb-4 sm:mb-6 text-balance">
              Got questions? We've got answers
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 text-pretty">
              Our team of home lending experts is here to help
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 cursor-pointer hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg btn-hover-lift focus-enhanced"
            >
              Get started today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </ResponsiveWrapper>
      </section>

      <Footer />
    </div>
  )
}
