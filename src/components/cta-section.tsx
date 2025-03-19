import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown, Search } from "lucide-react";
import "../styles/cta-section.css";

interface CTASectionProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  subtext: string;
  image: string;
}

export function CTASection({
  title,
  buttonText,
  buttonLink,
  subtext,
  image,
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">{title}</h2>
            <Link href={buttonLink} className="cta-button">
              {buttonText}
              <ArrowRight size={18} />
            </Link>
            <div className="cta-subtext">{subtext}</div>
          </div>

          <div className="cta-image-container">
            <div className="cta-image">
              <Image
                src={image || "/placeholder.svg"}
                alt="Customer service representative"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
