import "../styles/contact-hero.css";

interface ContactHeroProps {
  title: string;
  description: string;
}

export function ContactHero({ title, description }: ContactHeroProps) {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">{title}</h1>
          <p className="contact-hero-description">{description}</p>
        </div>
      </div>
    </section>
  );
}
