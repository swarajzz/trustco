import Image from "next/image";
import Link from "next/link";
import "../styles/trainers-section.css";

interface TrainersSectionProps {
  creditText: string;
  academyName: string;
  academyLink: string;
  collaboratorsTitle: string;
  collaborators: {
    name: string;
    image: string;
  }[];
}

export function TrainersSection({
  creditText,
  academyName,
  academyLink,
  collaboratorsTitle,
  collaborators,
}: TrainersSectionProps) {
  return (
    <section className="trainers-section">
      <div className="container">
        <div className="trainers-container">
          <div className="trainers-credit">
            <p className="trainers-credit-text">
              {creditText}{" "}
              <Link href={academyLink} className="academy-link">
                {academyName}
              </Link>
            </p>
          </div>

          <div className="trainers-collaborators">
            <h3 className="collaborators-title">{collaboratorsTitle}</h3>
            <div className="collaborators-list">
              {collaborators.map((collaborator, index) => (
                <div key={index} className="collaborator-item">
                  <Image
                    src={collaborator.image || "/placeholder.svg"}
                    alt={collaborator.name}
                    width={70}
                    height={70}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
