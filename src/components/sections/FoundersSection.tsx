import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { founders } from "@/data/founders";

export function FoundersSection() {
  return (
    <section aria-labelledby="founders-heading" className="mb-16 sm:mb-20">
      <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <h2
          id="founders-heading"
          className="text-2xl font-semibold tracking-tight text-[#F4F6FF] sm:text-3xl"
        >
          Meet the Minds Behind Orlithix
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#A5B2CC] sm:text-base">
          Driven by curiosity, engineering and a shared vision to explore the
          future of intelligent technology.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {founders.map((founder) => (
          <Card
            key={founder.name}
            className="h-full overflow-hidden p-0 hover:border-[#586BFF]/50"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#080D1B]">
              <Image
                src={founder.image}
                alt={founder.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F6FF]">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#40D6C5]">
                    {founder.designation}
                  </p>
                </div>
                <span className="mt-1 self-start rounded-full border border-[#263650] bg-[#10192B] px-3 py-1 text-xs text-[#A5B2CC]">
                  {founder.leadershipRole}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#A5B2CC]">
                {founder.description}
              </p>
              <ul
                aria-label={`${founder.name} professional specialisations`}
                className="mt-5 flex flex-wrap gap-2"
              >
                {founder.specialisations.map((specialisation) => (
                  <li
                    key={specialisation}
                    className="rounded-full border border-[#263650] bg-[#080D1B]/70 px-3 py-1.5 text-xs text-[#A5B2CC]"
                  >
                    {specialisation}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
