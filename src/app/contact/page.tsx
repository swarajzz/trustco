import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact-hero";
import { ContactMethods } from "@/components/contact-methods";
import { ContactForm } from "@/components/contact-form";
import { mainNavItems, authNavItems } from "@/data/navigation";
import { footerData } from "@/data/footer";
import { contactData } from "@/data/contact";

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <Header mainItems={mainNavItems} authItems={authNavItems} />

      {/* Contact Hero */}
      <ContactHero
        title={contactData.hero.title}
        description={contactData.hero.description}
      />

      {/* Contact Methods */}
      <ContactMethods methods={contactData.methods} />

      {/* Contact Form */}
      <ContactForm
        title={contactData.form.title}
        description={contactData.form.description}
        termsText={contactData.form.termsText}
        termsLink={contactData.form.termsLink}
        submitText={contactData.form.submitText}
      />

      {/* Footer */}
      <Footer
        creditText={footerData.creditText}
        academyName={footerData.academyName}
        academyLink={footerData.academyLink}
        collaboratorsTitle={footerData.collaboratorsTitle}
        collaborators={footerData.collaborators}
        companyDescription={footerData.companyDescription}
        socialLinks={footerData.socialLinks}
        navigation={footerData.navigation}
        copyright={footerData.copyright}
        legalLinks={footerData.legalLinks}
        languages={footerData.languages}
        collaboratorSection={false}
      />
    </div>
  );
}
