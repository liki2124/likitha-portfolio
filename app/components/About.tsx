import { about } from "../data/about";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[#1E293B] px-5 py-14 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF] sm:text-sm sm:tracking-[0.2em]">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Building with Data & Technology
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            A multidisciplinary background across data analytics, software
            engineering, cloud infrastructure and DevOps.
          </p>

        </div>

        {/* Introduction */}
        <div className="mt-8 max-w-4xl space-y-4 sm:mt-10 sm:space-y-5">
          {about.introduction.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Core areas */}
        <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">

          {about.areas.map((area) => (
            <div
              key={area.title}
              className="group rounded-2xl border border-[#1E293B] bg-[#0D1726]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/40 hover:bg-[#0D1726] sm:p-6"
            >

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#2DD4BF]/30 bg-[#2DD4BF]/10 sm:mb-5">
                <span className="text-sm font-bold text-[#2DD4BF]">
                  {area.title.charAt(0)}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-100">
                {area.title}
              </h3>

              <p className="mt-2.5 text-sm leading-6 text-slate-400 sm:mt-3">
                {area.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}