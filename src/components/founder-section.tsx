import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown } from "lucide-react";
import "../styles/founder-section.css";

interface FounderSectionProps {
  title: string;
  quote: string;
  name: string;
  position: string;
  founderImage: string;
  teamMemberImage: string;
  ctaText: string;
  ctaLink: string;
}

export function FounderSection({
  title,
  quote,
  name,
  position,
  founderImage,
  teamMemberImage,
  ctaText,
  ctaLink,
}: FounderSectionProps) {
  return (
    <section className="founder-section">
      <div className="container">
        <div className="founder-container">
          <div className="founder-content">
            <h2 className="founder-title">{title}</h2>
            <p className="founder-quote">{quote}</p>
            <div className="founder-info">
              <div className="founder-name">{name}</div>
              <div className="founder-position">{position}</div>
            </div>
            <Link href={ctaLink} className="founder-cta">
              {ctaText}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="founder-images">
            <div className="founder-main-image">
              <Image
                src={founderImage || "/placeholder.svg"}
                alt={`${name}, ${position}`}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div className="founder-team-image">
              <Image
                src={teamMemberImage || "/placeholder.svg"}
                alt="Team member"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="founder-crown">
              <Crown size={30} className="crown-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
