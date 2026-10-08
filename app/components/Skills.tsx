import { skills } from "../Data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[#1E293B] px-5 py-14 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF] sm:text-sm sm:tracking-[0.2em]">
            Technical Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Data, Engineering & Cloud
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            A combination of analytical, engineering and infrastructure
            capabilities developed through professional experience, academic
            projects and hands-on technical work.
          </p>
        </div>

        {/* Skill groups */}
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">

          {skills.map((group) => (
            <div
              key={group.category}
              className="group rounded-2xl border border-[#1E293B] bg-[#0D1726]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/40 hover:bg-[#0D1726] sm:p-6"
            >

              {/* Category heading */}
              <div className="flex items-start justify-between gap-4">

                <h3 className="text-lg font-semibold leading-6 sm:text-xl">
                  {group.category}
                </h3>

                <span className="shrink-0 text-sm font-semibold text-[#2DD4BF]">
                  {group.skills.length}
                </span>

              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              {/* Skill tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[#1E293B] bg-[#08111F] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition group-hover:border-[#334155] sm:px-3 sm:py-2 sm:text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}