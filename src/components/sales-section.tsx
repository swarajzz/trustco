import Image from "next/image";
import "../styles/sales-section.css";

interface SalesSectionProps {
  title: string;
  highlightText: string;
  description: string;
  videoThumbnail: string;
}

export function SalesSection({
  title,
  highlightText,
  description,
  videoThumbnail,
}: SalesSectionProps) {
  return (
    <section className="sales-section">
      <div className="container">
        <div className="sales-container">
          <div className="sales-top-row">
            <div className="sales-header">
              <h2 className="sales-title">{title}</h2>
              <div className="sales-highlight">{highlightText}</div>
            </div>
            <div className="sales-description">
              <p>{description}</p>
            </div>
          </div>

          <div className="sales-video-container">
            <div className="sales-video">
              <Image
                src={videoThumbnail || "/placeholder.svg?height=600&width=800"}
                alt="Sales training video thumbnail"
                width={800}
                height={450}
                style={{ objectFit: "cover" }}
              />
              <div className="play-button">
                <div className="play-button-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
