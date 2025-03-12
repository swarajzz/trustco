import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

interface HeroProps {
  title: string
  titleHighlight: string
  description: string
  cta: {
    title: string
    href: string
    variant: "primary" | "secondary"
    icon?: string
  }[]
  socialElements: {
    type: string
    name: string
    position: string
    size: number
  }[]
}

export function HeroSection({ title, titleHighlight, description, cta, socialElements }: HeroProps) {
  return (
    <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative">
      {/* Social Media Icons and Profile Images - Decorative Elements */}
      {socialElements.map((element, index) => (
        <div key={index} className={`absolute ${element.position} hidden md:block`}>
          <div
            className={`bg-white rounded-full ${element.type === "social" ? "p-2" : ""} shadow-md ${element.type === "profile" ? "overflow-hidden" : ""}`}
          >
            <Image
              src={`/placeholder.svg?height=${element.size}&width=${element.size}`}
              alt={element.name}
              width={element.size}
              height={element.size}
              className="rounded-full"
            />
          </div>
        </div>
      ))}

      {/* Main Hero Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12141d] mb-6">
          {title} <span className="text-[#043a53]">{titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-[#12141d] mb-10 max-w-3xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {cta.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={
                button.variant === "primary"
                  ? "bg-[#043a53] text-white px-8 py-3 rounded-full font-medium hover:bg-[#032a3d] transition-colors w-full sm:w-auto"
                  : "flex items-center justify-center gap-2 border border-[#92a7b0] bg-white px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto"
              }
            >
              {button.icon === "play" && <Play size={18} className="text-[#043a53]" />}
              {button.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

