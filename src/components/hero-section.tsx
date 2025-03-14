import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import "../styles/hero.css";

interface HeroProps {
  title: string;
  titleHighlight: string;
  description: string;
  cta: {
    title: string;
    href: string;
    variant: "primary" | "secondary";
    icon?: string;
  }[];
  heroImages: {
    src: string;
    alt: string;
    width: number;
    height: number;
    position: string;
  }[];
}

export function HeroSection({
  title,
  titleHighlight,
  description,
  cta,
  heroImages,
}: HeroProps) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Desktop Hero Images - Only visible on desktop */}
        {heroImages.map((image, index) => (
          <div
            key={`desktop-${index}`}
            className={`hero-image-desktop hero-image-${image.position}`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}

        {/* Main Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            {title}{" "}
            <span className="hero-title-highlight">{titleHighlight}</span>
          </h1>
          <p className="hero-description">{description}</p>
          <div className="hero-cta">
            {cta.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={
                  button.variant === "primary"
                    ? "primary-button"
                    : "secondary-button"
                }
              >
                {button.icon === "play" && (
                  <Play size={18} className="play-icon" />
                )}
                {button.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Hero Images - Only visible on mobile */}
        <div className="hero-images-mobile">
          {heroImages.map((image, index) => (
            <div key={`mobile-${index}`} className="hero-image-mobile">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
