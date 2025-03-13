import Image from "next/image";
import "../styles/brands.css";

interface BrandsProps {
  title: string;
  brands: {
    name: string;
    logo: string;
    width: number;
    height: number;
  }[];
}

export function BrandsSection({ title, brands }: BrandsProps) {
  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-container">
          <h2 className="brands-title">{title}</h2>
          <div className="brands-list">
            {brands.map((brand) => (
              <div key={brand.name} className="brand-item">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
