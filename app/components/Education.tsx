import { education } from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-[#1E293B] px-5 py-14 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF] sm:text-sm sm:tracking-[0.2em]">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Academic Background
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            An academic foundation combining computer science, data analytics
            and applied machine learning.
          </p>

        </div>

        {/* Education cards */}
        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">

          {education.map((item, index) => (
            <article
              key={`${item.institution}-${item.period}`}
              className="group rounded-2xl border border-[#1E293B] bg-[#0D1726]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/40 hover:bg-[#0D1726] sm:p-7"
            >

              {/* Top section */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">

                <div>

                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2DD4BF] sm:text-xs sm:tracking-[0.15em]">
                    {index === 0 ? "Postgraduate" : "Undergraduate"}
                  </p>

                  <h3 className="mt-2.5 text-xl font-bold leading-7 sm:mt-3">
                    {item.institution}
                  </h3>

                </div>

                <span className="w-fit shrink-0 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/10 px-3 py-1 text-[11px] font-semibold text-[#2DD4BF] sm:text-xs">
                  {item.grade}
                </span>

              </div>

              {/* Qualification */}
              <p className="mt-4 text-base font-medium leading-6 text-slate-300 sm:text-lg">
                {item.qualification}
              </p>

              {/* Period / location */}
              <div className="mt-2.5 flex flex-wrap text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm">
                <span>{item.period}</span>
                <span className="mx-2">·</span>
                <span>{item.location}</span>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-slate-400 sm:mt-6">
                {item.description}
              </p>

              {/* Focus areas */}
              <div className="mt-6 sm:mt-7">

                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.15em]">
                  Focus Areas
                </p>

                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-lg border border-[#1E293B] bg-[#08111F] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition group-hover:border-[#334155] sm:px-3 sm:py-2 sm:text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}