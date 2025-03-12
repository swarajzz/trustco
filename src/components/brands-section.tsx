import Image from "next/image";

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
    <section className="container mx-auto py-16 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <h2 className="text-xl md:text-2xl font-semibold text-[#12141d] text-center md:text-left whitespace-nowrap">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 w-full">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
