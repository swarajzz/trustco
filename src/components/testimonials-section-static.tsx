import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
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
}

export function TestimonialsSection({
  title,
  seeAllLink,
  testimonials,
}: TestimonialsSectionProps) {
  // Just show the first two testimonials in a static version
  const visibleTestimonials = testimonials.slice(0, 2);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{title}</h2>
          <Link href={seeAllLink} className="see-all-link">
            See All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-container">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <Quote size={32} className="quote-icon" />
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
                    <div className="author-position">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-pagination">
            <div className="pagination-dot active" />
            <div className="pagination-dot" />
            <div className="pagination-dot" />
            <div className="pagination-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
