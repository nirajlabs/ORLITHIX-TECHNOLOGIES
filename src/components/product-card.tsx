import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProductCategory, ProductItem } from "@/lib/products";
import { 
  ArrowRight, 
  Terminal, 
  CircleDot,
  Layers, 
  Cpu,
  Database,
  Briefcase
} from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
  className?: string;
}

const categoryIcons: Record<string, React.ElementType> = {
  "AI & ML": Cpu,
  "Enterprise Software": Briefcase,
  "Data Intelligence": Database,
  Automation: Layers,
};

const artworkStyles: Record<ProductCategory, string> = {
  "AI & ML": "from-[#586BFF]/20 via-[#10192B] to-[#40D6C5]/10",
  "Enterprise Software": "from-[#40D6C5]/15 via-[#10192B] to-[#586BFF]/15",
  "Data Intelligence": "from-[#40D6C5]/15 via-[#10192B] to-[#586BFF]/10",
  Automation: "from-[#586BFF]/15 via-[#10192B] to-[#40D6C5]/10",
};

interface ProductArtworkProps {
  product: ProductItem;
  className?: string;
  sizes?: string;
}

export function ProductArtwork({
  product,
  className = "",
  sizes = "(max-width: 768px) 100vw, 1280px",
}: ProductArtworkProps) {
  const CategoryIcon = categoryIcons[product.category] || Terminal;

  return (
    <div
      className={`relative isolate aspect-[16/7] overflow-hidden bg-[#10192B] ${className}`}
    >
      {product.image ? (
        <Image
          src={product.image}
          alt={`${product.name} product artwork`}
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${artworkStyles[product.category]}`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(165,178,204,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(165,178,204,0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <svg
            viewBox="0 0 640 280"
            className="absolute inset-0 h-full w-full text-[#40D6C5]/30"
            fill="none"
          >
            <circle cx="470" cy="140" r="118" stroke="currentColor" />
            <circle cx="470" cy="140" r="82" stroke="currentColor" />
            <circle cx="470" cy="140" r="46" stroke="currentColor" />
            <path
              d="M325 140h290M470 0v280M368 38l204 204M572 38 368 242"
              stroke="currentColor"
            />
          </svg>
          <div className="absolute right-[20%] top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#40D6C5]/40 bg-[#080D1B]/80 text-[#40D6C5] sm:h-24 sm:w-24">
            <CategoryIcon
              aria-hidden="true"
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
          </div>
        </div>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#080D1B]/90 via-[#080D1B]/35 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
        <div className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#40D6C5] sm:text-[10px]">
            {product.category}
          </p>
          <p className="mt-1 truncate text-sm font-semibold text-[#F4F6FF] sm:text-base">
            {product.name}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-[#263650] bg-[#080D1B]/70 px-2.5 py-1 font-mono text-[9px] uppercase text-[#A5B2CC] sm:text-[10px]">
          {product.statusLabel}
        </span>
      </div>
    </div>
  );
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = "",
}) => {
  const CategoryIcon = categoryIcons[product.category] || Terminal;

  // Status badge styling
  const statusConfig = {
    research_and_validation: {
      badgeBg: "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30 shadow-[0_0_12px_rgba(64,214,197,0.15)]",
      dot: "bg-[#40D6C5] shadow-[0_0_6px_#40D6C5]",
    },
    future_concept: {
      badgeBg: "bg-[#586BFF]/10 text-[#F4F6FF] border-[#586BFF]/30",
      dot: "bg-[#586BFF]",
    },
    prototype: {
      badgeBg: "bg-[#10192B] text-[#F4F6FF] border-[#263650]",
      dot: "bg-[#A5B2CC]",
    },
    pilot: {
      badgeBg: "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30",
      dot: "bg-[#40D6C5]",
    },
    launched: {
      badgeBg: "bg-[#586BFF]/10 text-[#F4F6FF] border-[#586BFF]/40",
      dot: "bg-[#586BFF]",
    },
  }[product.stage];

  return (
    <article
      className={`group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#263650] bg-[#121F36] p-5 transition-[background-color,border-color,box-shadow] duration-200 hover:border-[#586BFF]/60 hover:bg-[#15233c] hover:shadow-md hover:shadow-[#080D1B]/25 sm:p-6 ${className}`}
    >
      <ProductArtwork
        product={product}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="-mx-5 -mt-5 mb-5 border-b border-[#263650] sm:-mx-6 sm:-mt-6"
      />

      <div>
        {/* Top Header Bar: Category + Status Badge */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#263650] bg-[#10192B] text-[#40D6C5]">
              <CategoryIcon aria-hidden="true" className="h-4 w-4" />
            </div>
            <span className="text-xs font-medium text-[#A5B2CC]">
              {product.category}
            </span>
          </div>

          <span
            className={`inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase leading-tight ${statusConfig.badgeBg}`}
          >
            <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusConfig.dot}`} />
            <span>{product.statusLabel}</span>
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-semibold leading-snug text-[#F4F6FF] transition-colors duration-200 group-hover:text-[#40D6C5] sm:text-2xl">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex min-h-11 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            {product.name}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-sm leading-snug text-[#40D6C5]">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-[#A5B2CC] line-clamp-3">
          {product.description}
        </p>

        {/* Problem & Solution Snapshot Box */}
        <div className="mt-5 space-y-2 rounded-xl border border-[#263650] bg-[#10192B] p-4">
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-wider text-[#A5B2CC]">
              Problem space
            </span>
            <p className="mt-1 text-xs leading-relaxed text-[#A5B2CC] line-clamp-2">
              {product.problemStatement}
            </p>
          </div>
        </div>

        {/* Key Features Preview */}
        <div className="mt-5 border-t border-[#263650] pt-4">
          <span className="mb-2 block text-[10px] font-mono uppercase tracking-wider text-[#A5B2CC]">
            Proposed feature areas
          </span>
          <ul className="space-y-1.5">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-[#F4F6FF]/90">
                <CircleDot aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#40D6C5]" />
                <span className="line-clamp-1">{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack Chips */}
        <div className="mt-5 border-t border-[#263650] pt-3">
          <div className="flex flex-wrap gap-1.5">
            {product.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[#263650] bg-[#080D1B] px-2 py-1 text-[10px] font-mono text-[#A5B2CC]"
              >
                {tech}
              </span>
            ))}
            {product.techStack.length > 4 && (
              <span className="rounded-md bg-[#080D1B] px-2 py-1 text-[10px] font-mono text-[#A5B2CC]">
                +{product.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end border-t border-[#263650] pt-3">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#A5B2CC] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
        >
          <span>View product details</span>
          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
};
