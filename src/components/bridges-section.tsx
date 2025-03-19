import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Diamond } from "lucide-react";
import "../styles/bridges-section.css";

interface BridgesSectionProps {
  title: string;
  highlightText: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  award: {
    number: string;
    text: string;
    year: string;
  };
}

export function BridgesSection({
  title,
  highlightText,
  description,
  image,
  ctaText,
  ctaLink,
  award,
}: BridgesSectionProps) {
  return (
    <section className="bridges-section">
      {/* <div className="container"> */}
        <div className="bridges-container">
          <div className="bridges-image-container">
            <div className="bridges-image">
              <Image
                src={image || "/placeholder.svg"}
                alt="Business professionals collaborating"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bridges-award">
              <Diamond size={24} className="award-icon" />
              <div className="award-number">{award.number}</div>
              <div className="award-text">{award.text}</div>
              <div className="award-year">{award.year}</div>
            </div>
          </div>

          <div className="bridges-content">
            <h2 className="bridges-title">
              {title} <span className="bridges-highlight">{highlightText}</span>
            </h2>
            <p className="bridges-description">{description}</p>
            <Link href={ctaLink} className="bridges-cta">
              {ctaText}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
