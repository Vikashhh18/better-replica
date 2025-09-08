"use client"

import type React from "react"
import Footer from "@/components/footer"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { ArrowRight, Home, DollarSign, MapPin, User, Phone, Mail } from "lucide-react"

export default function StartPage() {
  const [formData, setFormData] = useState({
    loanPurpose: "",
    propertyType: "",
    propertyUse: "",
    homePrice: "",
    downPayment: "",
    zipCode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreeToTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Home className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Hi! I'm Betsy, your personal loan officer
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-pretty">
            I'll help you get pre-approved for a mortgage in as little as 3 minutes. Let's get started!
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Loan Purpose */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold flex items-center gap-2">
                    <Home className="h-5 w-5 text-green-600" />
                    What would you like to do?
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      type="button"
                      variant={formData.loanPurpose === "buy" ? "default" : "outline"}
                      onClick={() => handleInputChange("loanPurpose", "buy")}
                      className="h-16 text-left justify-start"
                    >
                      <div>
                        <div className="font-semibold">Buy a home</div>
                        <div className="text-sm opacity-70">Purchase a new property</div>
                      </div>
                    </Button>
                    <Button
                      type="button"
                      variant={formData.loanPurpose === "refinance" ? "default" : "outline"}
                      onClick={() => handleInputChange("loanPurpose", "refinance")}
                      className="h-16 text-left justify-start"
                    >
                      <div>
                        <div className="font-semibold">Refinance</div>
                        <div className="text-sm opacity-70">Replace your current loan</div>
                      </div>
                    </Button>
                    <Button
                      type="button"
                      variant={formData.loanPurpose === "cashout" ? "default" : "outline"}
                      onClick={() => handleInputChange("loanPurpose", "cashout")}
                      className="h-16 text-left justify-start"
                    >
                      <div>
                        <div className="font-semibold">Cash-out refinance</div>
                        <div className="text-sm opacity-70">Get cash from your equity</div>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Property Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Tell us about the property</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Property Type</Label>
                      <Select onValueChange={(value) => handleInputChange("propertyType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-family">Single Family Home</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="multi-family">Multi-Family</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Property Use</Label>
                      <Select onValueChange={(value) => handleInputChange("propertyUse", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How will you use this property?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">Primary Residence</SelectItem>
                          <SelectItem value="secondary">Secondary Home</SelectItem>
                          <SelectItem value="investment">Investment Property</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label>Home Price</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="400,000"
                          value={formData.homePrice}
                          onChange={(e) => handleInputChange("homePrice", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Down Payment</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="80,000"
                          value={formData.downPayment}
                          onChange={(e) => handleInputChange("downPayment", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>ZIP Code</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="12345"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                          className="pl-10"
                          maxLength={5}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <User className="h-5 w-5 text-green-600" />
                    Your Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to Better's{" "}
                      <a href="#" className="text-green-600 hover:underline">
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-green-600 hover:underline">
                        Privacy Policy
                      </a>
                      . I also agree to receive marketing communications from Better and its partners.
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                    disabled={!formData.agreeToTerms}
                  >
                    Get my pre-approval
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4">This won't affect your credit score</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">3 minutes</div>
              <p className="text-gray-600">Average time to get pre-approved</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">No impact</div>
              <p className="text-gray-600">on your credit score</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100% digital</div>
              <p className="text-gray-600">process from start to finish</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
