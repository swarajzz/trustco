import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { BrandsSection } from "@/components/brands-section";
import { SalesSection } from "@/components/sales-section";
import { BenefitsSection } from "@/components/benefits-section";
import { StatsSection } from "@/components/stats-section";
import { FounderSection } from "@/components/founder-section";
import { BridgesSection } from "@/components/bridges-section";
import { TestimonialsSection } from "@/components/testimonials-section-static";
import { BlogSection } from "@/components/blog-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { mainNavItems, authNavItems } from "@/data/navigation";
import { heroData, heroImages } from "@/data/hero";
import { brandsData } from "@/data/brands";
import { salesData } from "@/data/sales";
import { benefitsData } from "@/data/benefits";
import { statsData } from "@/data/stats";
import { founderData } from "@/data/founder";
import { bridgesData } from "@/data/bridges";
import { testimonialsData } from "@/data/testimonials";
import { blogData } from "@/data/blog";
import { ctaData } from "@/data/cta";
import { footerData } from "@/data/footer";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header mainItems={mainNavItems} authItems={authNavItems} />

      {/* Hero Section */}
      <HeroSection
        title={heroData.title}
        titleHighlight={heroData.titleHighlight}
        description={heroData.description}
        cta={heroData.cta}
        heroImages={heroImages}
      />

      {/* Brands Section */}
      <BrandsSection title={brandsData.title} brands={brandsData.brands} />

      {/* Sales Section */}
      <SalesSection
        title={salesData.title}
        highlightText={salesData.highlightText}
        description={salesData.description}
        videoThumbnail={salesData.videoThumbnail}
      />

      {/* Benefits Section */}
      <BenefitsSection
        badge={benefitsData.badge}
        title={benefitsData.title}
        description={benefitsData.description}
        benefits={benefitsData.benefits}
      />

      {/* Stats Section */}
      <StatsSection stats={statsData} />

      {/* Founder Section */}
      <FounderSection
        title={founderData.title}
        quote={founderData.quote}
        name={founderData.name}
        position={founderData.position}
        founderImage={founderData.founderImage}
        teamMemberImage={founderData.teamMemberImage}
        ctaText={founderData.ctaText}
        ctaLink={founderData.ctaLink}
      />

      {/* Bridges Section */}
      <BridgesSection
        title={bridgesData.title}
        highlightText={bridgesData.highlightText}
        description={bridgesData.description}
        image={bridgesData.image}
        ctaText={bridgesData.ctaText}
        ctaLink={bridgesData.ctaLink}
        award={bridgesData.award}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title={testimonialsData.title}
        seeAllLink={testimonialsData.seeAllLink}
        testimonials={testimonialsData.testimonials}
      />

      {/* Blog Section */}
      <BlogSection
        title={blogData.title}
        titleHighlight={blogData.titleHighlight}
        titleSuffix={blogData.titleSuffix}
        seeAllLink={blogData.seeAllLink}
        posts={blogData.posts}
      />

      {/* CTA Section */}
      <CTASection
        title={ctaData.title}
        buttonText={ctaData.buttonText}
        buttonLink={ctaData.buttonLink}
        subtext={ctaData.subtext}
        image={ctaData.image}
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
      />
    </div>
  );
}
