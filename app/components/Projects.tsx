import { projects } from "../Data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-[#1E293B] px-5 py-14 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF] sm:text-sm sm:tracking-[0.2em]">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Projects That Combine Data & Engineering
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            A selection of work demonstrating how I apply data analytics,
            machine learning, software engineering and cloud technologies to
            practical problems.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group rounded-2xl border border-[#1E293B] bg-[#0D1726]/70 p-5 transition duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#0D1726] sm:p-6 ${
                index === 0 ? "md:p-10" : "md:p-8"
              }`}
            >

              {/* Project layout */}
              <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">

                {/* Main information */}
                <div>

                  {/* Category + featured */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">

                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#2DD4BF] sm:text-xs sm:tracking-[0.18em]">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/10 px-2.5 py-1 text-[10px] font-medium text-[#2DD4BF] sm:px-3 sm:text-xs">
                        Featured Project
                      </span>
                    )}

                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                    {project.description}
                  </p>

                  {/* Challenge */}
                  <div className="mt-6 sm:mt-7">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.15em]">
                      The Challenge
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {project.problem}
                    </p>

                  </div>

                  {/* Approach */}
                  <div className="mt-5">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.15em]">
                      My Approach
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {project.solution}
                    </p>

                  </div>

                </div>

                {/* Technologies + outcomes */}
                <div>

                  {/* Technologies */}
                  <div>

                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.15em]">
                      Technologies
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-[#1E293B] bg-[#08111F] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition group-hover:border-[#334155] sm:px-3 sm:py-2 sm:text-xs"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Outcomes */}
                  <div className="mt-7 sm:mt-8">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.15em]">
                      Key Outcomes
                    </p>

                    <ul className="mt-3 space-y-3 sm:mt-4">
                      {project.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex gap-3 text-sm leading-6 text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2DD4BF]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}