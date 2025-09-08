import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Award, TrendingUp } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Our mission is simple</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 text-pretty">
            To make homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The status quo is broken</h2>
              <p className="text-lg text-gray-600 mb-6">
                For decades, getting a mortgage has been unnecessarily complex, opaque, and time-consuming. Fees aren't
                transparent. Traditional lenders are slow to adopt technology.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                That's why we started Better — to give every family the clarity, confidence, and support they need to
                get a great mortgage.
              </p>
              <Button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white">
                Get started today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-6xl font-bold text-green-600 mb-4">2016</div>
              <p className="text-lg text-gray-700">
                Better was founded with a simple mission: make getting a mortgage simpler, faster, and more accessible
                for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 text-balance">
            How we're changing things
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">People first</h3>
                <p className="text-gray-600">Our customers are real people with real dreams. We treat them that way.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                <p className="text-gray-600">No hidden fees, no surprises. We believe in complete transparency.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">We use technology to make the mortgage process faster and easier.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We're committed to providing the best possible experience for our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">By the numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">$100B+</div>
              <p className="text-gray-600 text-lg">in funded loans</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">400K+</div>
              <p className="text-gray-600 text-lg">customers served</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">8 years</div>
              <p className="text-gray-600 text-lg">of innovation</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">50 states</div>
              <p className="text-gray-600 text-lg">we serve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Built by a team that gets it</h2>
          <p className="text-xl text-gray-600 mb-12 text-pretty">
            We're not just building a mortgage company. We're building the future of homeownership.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Vishal Garg</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Erik Bernhardsson</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Sarah Wheeler</h3>
              <p className="text-gray-600">VP of Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Ready to get started?</h2>
          <p className="text-xl text-green-100 mb-8 text-pretty">
            Join hundreds of thousands of customers who chose a better way to get a mortgage.
          </p>
          <Button size="lg" className="bg-white cursor-pointer text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Start my approval
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
