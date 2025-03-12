import Image from "next/image"
import Link from "next/link"

import { MainNav } from "@/components/main-nav"
import { AuthNav } from "@/components/auth-nav"
import { MobileMenu } from "@/components/mobile-menu"
import { HeroSection } from "@/components/hero-section"
import { mainNavItems, authNavItems } from "@/data/navigation"
import { heroData, socialElements } from "@/data/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f5f6]">
      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="Trustco Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <MainNav items={mainNavItems} />
          <AuthNav items={authNavItems} />
          <MobileMenu mainItems={mainNavItems} authItems={authNavItems} />
        </nav>
      </header>

      {/* Hero Section */}
      <HeroSection
        title={heroData.title}
        titleHighlight={heroData.titleHighlight}
        description={heroData.description}
        cta={heroData.cta}
        socialElements={socialElements}
      />
    </div>
  )
}