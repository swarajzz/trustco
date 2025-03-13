import Image from "next/image";
import "../styles/benefits-section.css";

interface BenefitsSectionProps {
  badge: string;
  title: string;
  description: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export function BenefitsSection({
  badge,
  title,
  description,
  benefits,
}: BenefitsSectionProps) {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-container">
          <div className="benefits-header">
            <div className="benefits-badge">{badge}</div>
            <h2 className="benefits-title">{title}</h2>
            <p className="benefits-description">{description}</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <Image
                    src={benefit.icon || "/placeholder.svg"}
                    alt={`${benefit.title} icon`}
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
