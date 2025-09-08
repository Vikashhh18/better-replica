"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState, useEffect } from "react"
import { Calculator, DollarSign, Home, Percent, Calendar } from "lucide-react"

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(400000)
  const [downPayment, setDownPayment] = useState(80000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [propertyTax, setPropertyTax] = useState(265)
  const [homeInsurance, setHomeInsurance] = useState(132)
  const [pmi, setPmi] = useState(0)
  const [hoaFees, setHoaFees] = useState(0)

  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [principalAndInterest, setPrincipalAndInterest] = useState(0)
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0)

  const downPaymentPercent = (downPayment / homePrice) * 100

  useEffect(() => {
    const loanAmount = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    if (loanAmount > 0 && monthlyRate > 0) {
      const monthlyPI =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

      setPrincipalAndInterest(monthlyPI)

      // Calculate PMI if down payment is less than 20%
      const calculatedPmi = downPaymentPercent < 20 ? (loanAmount * 0.005) / 12 : 0
      setPmi(calculatedPmi)

      const total = monthlyPI + propertyTax + homeInsurance + calculatedPmi + hoaFees
      setTotalMonthlyPayment(total)
      setMonthlyPayment(monthlyPI)
    }
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTax, homeInsurance, hoaFees, downPaymentPercent])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatCurrencyDetailed = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Calculator className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Mortgage Calculator</h1>
          <p className="text-xl text-gray-600 text-pretty">
            Get an estimate of your monthly mortgage payment with taxes, insurance, and PMI
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Inputs */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-green-600" />
                    Loan Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Home Price */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Home Price</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="number"
                        value={homePrice}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="400,000"
                      />
                    </div>
                    <Slider
                      value={[homePrice]}
                      onValueChange={(value) => setHomePrice(value[0])}
                      max={2000000}
                      min={100000}
                      step={10000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$100K</span>
                      <span>$2M</span>
                    </div>
                  </div>

                  {/* Down Payment */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Down Payment ({downPaymentPercent.toFixed(1)}%)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="80,000"
                      />
                    </div>
                    <Slider
                      value={[downPayment]}
                      onValueChange={(value) => setDownPayment(value[0])}
                      max={homePrice * 0.5}
                      min={homePrice * 0.03}
                      step={1000}
                      className="w-full"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Interest Rate</Label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="pl-10 text-lg"
                        step="0.1"
                        placeholder="6.5"
                      />
                    </div>
                    <Slider
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      max={10}
                      min={3}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  {/* Loan Term */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Loan Term</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="30"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={loanTerm === 15 ? "default" : "outline"}
                        onClick={() => setLoanTerm(15)}
                        className="flex-1"
                      >
                        15 years
                      </Button>
                      <Button
                        variant={loanTerm === 30 ? "default" : "outline"}
                        onClick={() => setLoanTerm(30)}
                        className="flex-1"
                      >
                        30 years
                      </Button>
                    </div>
                  </div>

                  {/* Additional Costs */}
                  <div className="space-y-6 pt-6 border-t">
                    <h3 className="text-lg font-semibold">Additional Monthly Costs</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Property Tax (monthly)</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            type="number"
                            value={propertyTax}
                            onChange={(e) => setPropertyTax(Number(e.target.value))}
                            className="pl-10"
                            placeholder="265"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Home Insurance (monthly)</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            type="number"
                            value={homeInsurance}
                            onChange={(e) => setHomeInsurance(Number(e.target.value))}
                            className="pl-10"
                            placeholder="132"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>HOA Fees (monthly)</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            type="number"
                            value={hoaFees}
                            onChange={(e) => setHoaFees(Number(e.target.value))}
                            className="pl-10"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center">Monthly Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{formatCurrency(totalMonthlyPayment)}</div>
                    <p className="text-gray-600">Total monthly payment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Payment Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Principal & Interest</span>
                    <span className="font-semibold">{formatCurrencyDetailed(principalAndInterest)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Tax</span>
                    <span className="font-semibold">{formatCurrencyDetailed(propertyTax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Home Insurance</span>
                    <span className="font-semibold">{formatCurrencyDetailed(homeInsurance)}</span>
                  </div>
                  {pmi > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">PMI</span>
                      <span className="font-semibold">{formatCurrencyDetailed(pmi)}</span>
                    </div>
                  )}
                  {hoaFees > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">HOA Fees</span>
                      <span className="font-semibold">{formatCurrencyDetailed(hoaFees)}</span>
                    </div>
                  )}
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-green-600">{formatCurrencyDetailed(totalMonthlyPayment)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Loan Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-semibold">{formatCurrency(homePrice - downPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Down Payment</span>
                    <span className="font-semibold">{formatCurrency(downPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-semibold">{interestRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Term</span>
                    <span className="font-semibold">{loanTerm} years</span>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white py-6 text-lg">
                Get pre-approved
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
