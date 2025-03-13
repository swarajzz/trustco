import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Globe } from "lucide-react";
import "../styles/footer.css";

interface FooterProps {
  // Collaborators section
  creditText: string;
  academyName: string;
  academyLink: string;
  collaboratorsTitle: string;
  collaborators: {
    name: string;
    image: string;
  }[];

  // Main footer section
  companyDescription: string;
  socialLinks: {
    name: string;
    icon: string;
    url: string;
  }[];

  // Navigation links
  navigation: {
    home: {
      title: string;
      links: {
        name: string;
        url: string;
      }[];
    };
    about: {
      title: string;
      links: {
        name: string;
        url: string;
      }[];
    };
  };

  // Copyright section
  copyright: string;
  legalLinks: {
    name: string;
    url: string;
  }[];
  languages: {
    name: string;
    code: string;
  }[];
}

export function Footer({
  creditText,
  academyName,
  academyLink,
  collaboratorsTitle,
  collaborators,
  companyDescription,
  socialLinks,
  navigation,
  copyright,
  legalLinks,
  languages,
}: FooterProps) {
  // Function to render social icon based on name
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "facebook":
        return <Facebook size={20} />;
      case "instagram":
        return <Instagram size={20} />;
      case "youtube":
        return <Youtube size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer>
      {/* Collaborators Section */}
      <section className="collaborators-section">
        <div className="container">
          <div className="collaborators-container">
            <div className="collaborators-credit">
              <p className="collaborators-credit-text">
                {creditText}{" "}
                <Link href={academyLink} className="academy-link">
                  {academyName}
                </Link>
              </p>
            </div>

            <div className="collaborators-list-container">
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

      {/* Main Footer Section */}
      <section className="main-footer">
        <div className="container">
          <div className="main-footer-container">
            {/* Logo and Social Links */}
            <div className="footer-logo-section">
              <Link href="/">
                <Image
                  src="/images/Logo/Logo.svg"
                  alt="Trustco Logo"
                  width={180}
                  height={50}
                  className="footer-logo"
                />
              </Link>

              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.name}
                  >
                    {renderSocialIcon(social.icon)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Description */}
            <div className="footer-description">
              <p>{companyDescription}</p>
            </div>

            {/* Navigation Links */}
            <div className="footer-nav">
              {/* Home Links */}
              <div className="footer-nav-column">
                <h3 className="footer-nav-title">{navigation.home.title}</h3>
                <div className="footer-nav-links">
                  {navigation.home.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="footer-nav-link"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* About Links */}
              <div className="footer-nav-column">
                <h3 className="footer-nav-title">{navigation.about.title}</h3>
                <div className="footer-nav-links">
                  {navigation.about.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="footer-nav-link"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="copyright-section">
        <div className="container">
          <div className="copyright-container">
            <div className="copyright-text">{copyright}</div>

            <div className="legal-links">
              {legalLinks.map((link, index) => (
                <Link key={index} href={link.url} className="legal-link">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="language-selector">
              <Globe size={16} className="globe-icon" />
              <span>{languages[0].name}</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
