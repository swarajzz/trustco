import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { BrandsSection } from "@/components/brands-section";
import { SalesSection } from "@/components/sales-section";
import { BenefitsSection } from "@/components/benefits-section";
import { StatsSection } from "@/components/stats-section";
import { FounderSection } from "@/components/founder-section";
import { mainNavItems, authNavItems } from "@/data/navigation";
import { heroData, heroImages } from "@/data/hero";
import { brandsData } from "@/data/brands";
import { salesData } from "@/data/sales";
import { benefitsData } from "@/data/benefits";
import { statsData } from "@/data/stats";
import { founderData } from "@/data/founder";

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
    </div>
  );
}