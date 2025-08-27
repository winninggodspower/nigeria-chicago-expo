"use client"

import { Phone, Mail, Check } from "lucide-react"
import CustomButton from "@/components/custom-button"
import Navbar from "./components/navbar"
import Link from "next/link"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <section className="relative h-[38rem] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/african-women.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Connecting Nigerians Across Chicago</h1>
            <p className="text-lg md:text-xl mb-8 text-pretty opacity-90">
              A welcoming community for friendship, culture, business, and support - online and in person.
            </p>
            <Link href="/event">
              <CustomButton variant="secondary" size="lg">
                Join Free →
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Logo and Come and Connect */}
            <div className="text-center lg:text-left">
              {/* CN Logo */}
              <div className="flex justify-center lg:justify-start mb-8">
                <img
                  src="/CN-logo.webp"
                  alt="NACR Logo"
                  width={100}
                  height={100}
                  className="size-80" 
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Come and Connect</h3>
              <p className="text-green-100 text-lg leading-relaxed">
                Chicago Nigerians is NACR's online space where most of the activity happens. It's where members chat,
                share experiences, and keep the energy going between meetups.
              </p>
            </div>

            {/* Right Column - What We're Building */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">What We're Building</h2>
              <p className="text-green-100 text-lg leading-relaxed mb-8">
                Nigerian Association of Chicago Residents (NACR) is the official community hub for Nigerians in the
                Chicagoland area. We connect members to events, opportunities, services, and each other, so you never
                feel like you're doing life here alone.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 p-4 border border-green-600 rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-green-700" />
                  </div>
                  <span className="text-white text-lg font-medium">Community events & meetings</span>
                </div>

                <div className="flex items-center space-x-3 p-4 border border-green-600 rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-green-700" />
                  </div>
                  <span className="text-white text-lg font-medium">Business networking & support</span>
                </div>

                <div className="flex items-center space-x-3 p-4 border border-green-600 rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-green-700" />
                  </div>
                  <span className="text-white text-lg font-medium">Resources for newcomers & families</span>
                </div>
              </div>

              <Link href="/event">
                <CustomButton variant="secondary" size="lg">
                  Join Free →
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nigeria @ 65 Section */}
      <section className="bg-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Content */}
            <div>
              <div className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                What's Happening Next
              </div>

              <h2 className="text-4xl font-bold text-white mb-2">Nigeria @ 65!</h2>
              <h3 className="text-2xl font-semibold text-white mb-4">Business & Culture Exhibition</h3>
              <p className="text-xl text-teal-100 mb-6">Celebrate Independence Day in style!</p>

              <div className="text-teal-100 space-y-4 mb-6">
                <p className="text-lg leading-relaxed">
                  Join us for a lively showcase of local businesses and cultural experiences where you can discover new
                  favorites, support local entrepreneurs, and enjoy a fun-filled day with music, food, and vibrant
                  connections.
                </p>
                <p className="text-lg leading-relaxed">
                  All you have to do now is get your <strong>free ticket!</strong> Registration is required, so we can
                  make sure you're part of the fun.
                </p>
                <p className="text-lg leading-relaxed italic">
                  Be among the first 100 guests to register and receive an exclusive <strong>Swag Bag</strong>.
                </p>
              </div>

              <Link href="/event">
                <CustomButton variant="secondary" size="lg">
                  Get Your Free Ticket →
                </CustomButton>
              </Link>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {/* Top Row Cards */}
              <div className="bg-yellow-400 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-lg">🙌</span>
                  </div>
                  <h4 className="font-bold text-gray-900">Discover & Celebrate</h4>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Meet vendors, make new connections and enjoy the best of our community - all in one place.
                </p>
              </div>

              <div className="bg-yellow-400 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-lg">🛡️</span>
                  </div>
                  <h4 className="font-bold text-gray-900">Explore Diverse Businesses</h4>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Shop fashion & beauty, try services, and connect with pros in finance, real estate, legal and more.
                </p>
              </div>

              {/* Bottom Card - Spans full width on larger screens */}
              <div className="bg-yellow-400 p-6 rounded-lg md:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-lg">🏆</span>
                  </div>
                  <h4 className="font-bold text-gray-900">Early Bird Perks</h4>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">
                  First 100 registered guests get a special swag bag. Register now and enjoy the rewards!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Community Section */}
      <section className="relative bg-green-600 py-16 overflow-hidden">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fbbf24' fillOpacity='0.4'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l-15-15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Be Part of the NACR Community</h2>
          <p className="text-green-100 text-lg mb-8">
            Whether you're looking to network, give back, or pursue new opportunities, NACR is where Nigerians in
            Chicago connect, grow, and thrive.
          </p>
          <CustomButton variant="secondary" size="lg">
            Contact Us →
          </CustomButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0 h-24">
              <img
                src="/ng-chicago-logo.webp"
                alt="NACR Logo"
                width={40}
                height={40}
                className="h-full w-auto py-4" 
              />
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>nacr@chicagonigerians.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(312) 555-0123</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2024 Nigerian Association of Chicago Residents - All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}
