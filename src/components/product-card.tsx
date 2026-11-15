import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProductCategory, ProductItem } from "@/lib/products";
import { 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  ShieldAlert,
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
  "AI & ML": "from-indigo-500/30 via-[#10192B] to-cyan-400/10",
  "Enterprise Software": "from-cyan-500/25 via-[#10192B] to-indigo-500/20",
  "Data Intelligence": "from-emerald-500/20 via-[#10192B] to-blue-500/25",
  Automation: "from-violet-500/25 via-[#10192B] to-cyan-400/15",
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
          alt={`${product.name} concept artwork`}
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
          <div className="absolute right-[20%] top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#40D6C5]/40 bg-[#080D1B]/70 text-[#40D6C5] shadow-[0_0_40px_rgba(64,214,197,0.18)] sm:h-24 sm:w-24">
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
            {product.category} // Product Concept
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
      badgeBg: "bg-[#586BFF]/10 text-[#7888FF] border-[#586BFF]/30 shadow-[0_0_12px_rgba(88,107,255,0.15)]",
      dot: "bg-[#586BFF] shadow-[0_0_6px_#586BFF]",
    },
    prototype: {
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      dot: "bg-purple-400",
    },
    pilot: {
      badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      dot: "bg-amber-400",
    },
    launched: {
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      dot: "bg-emerald-400",
    },
  }[product.stage];

  return (
    <div
      className={`group relative flex flex-col justify-between bg-[#121F36] border border-[#263650] hover:border-[#586BFF]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-[#15233c] hover:shadow-[0_12px_40px_rgba(88,107,255,0.12)] hover:-translate-y-1 overflow-hidden ${className}`}
    >
      {/* Subtle top edge border gradient highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#586BFF]/40 to-transparent pointer-events-none" />

      <ProductArtwork
        product={product}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="-mx-6 -mt-6 mb-6 rounded-t-2xl border-b border-[#263650] sm:-mx-8 sm:-mt-8"
      />

      <div>
        {/* Top Header Bar: Category + Status Badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#586BFF] group-hover:text-[#40D6C5] transition-colors">
              <CategoryIcon className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs text-[#A5B2CC] uppercase tracking-wider">
              {product.category}
            </span>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full border ${statusConfig.badgeBg}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${statusConfig.dot}`} />
            <span>{product.statusLabel}</span>
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#F4F6FF] group-hover:text-[#40D6C5] transition-colors duration-200">
          <Link href={`/products/${product.slug}`} className="focus:outline-none">
            {product.name}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="mt-1 font-mono text-xs text-[#7888FF] leading-snug">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="mt-3.5 text-xs sm:text-sm text-[#A5B2CC] leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Problem & Solution Snapshot Box */}
        <div className="mt-5 p-3.5 rounded-xl bg-[#10192B]/80 border border-[#263650]/80 space-y-2">
          <div>
            <span className="block text-[10px] font-mono uppercase text-[#A5B2CC]/70 tracking-wider">
              Problem Space:
            </span>
            <p className="text-xs text-[#A5B2CC] line-clamp-2 mt-0.5">
              {product.problemStatement}
            </p>
          </div>
        </div>

        {/* Key Features Preview */}
        <div className="mt-5 pt-4 border-t border-[#263650]/60">
          <span className="block text-[10px] font-mono uppercase text-[#A5B2CC]/70 tracking-wider mb-2">
            Architectural Capabilities:
          </span>
          <ul className="space-y-1.5">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#F4F6FF]/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#40D6C5] flex-shrink-0 mt-0.5" />
                <span className="truncate">{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack Chips */}
        <div className="mt-5 pt-3 border-t border-[#263650]/40">
          <div className="flex flex-wrap gap-1.5">
            {product.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-[#080D1B] border border-[#263650] text-[10px] font-mono text-[#A5B2CC]"
              >
                {tech}
              </span>
            ))}
            {product.techStack.length > 4 && (
              <span className="px-1.5 py-0.5 rounded bg-[#080D1B] text-[10px] font-mono text-[#A5B2CC]/70">
                +{product.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA & R&D Badge */}
      <div className="mt-6 pt-4 border-t border-[#263650] flex items-center justify-between">
        <span className="text-[10px] font-mono text-[#A5B2CC]/60 uppercase flex items-center gap-1">
          <ShieldAlert className="w-3 h-3 text-amber-400/80" />
          R&D Evaluation
        </span>

        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#586BFF] group-hover:text-[#40D6C5] transition-colors"
        >
          <span>Explore Product Concept</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
