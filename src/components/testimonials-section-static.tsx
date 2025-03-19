import Image from "next/image";
import Link from "next/link";
import { ArrowRight, QuoteIcon } from "lucide-react";
import "../styles/testimonials-section.css";

interface TestimonialsSectionProps {
  title: string;
  seeAllLink: string;
  testimonials: {
    quote: string;
    name: string;
    position: string;
    avatar: string;
  }[];
  quoteIcon: string;
}

export function TestimonialsSection({
  title,
  seeAllLink,
  testimonials,
  quoteIcon,
}: TestimonialsSectionProps) {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{title}</h2>

          <div className="testimonials-pagination">
            <div className="pagination-dot"></div>
            <div className="pagination-dot active"></div>
            <div className="pagination-dot"></div>
            <div className="pagination-dot"></div>
          </div>
        </div>

        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* <div className="quote-icon">"</div> */}
              <Image src={quoteIcon} alt="Quote Icon" height={25} width={25} className="testimonial-quoteIcon"/>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-position">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="see-all-container">
          <Link href={seeAllLink} className="see-all-link">
            See All
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
