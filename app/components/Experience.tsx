import {
  professionalExperience,
  volunteerExperience,
} from "../data/experience";

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="relative grid gap-4 md:grid-cols-[180px_1fr] md:gap-6">

      {/* Timeline information */}
      <div className="relative md:pr-8">

        <p className="text-sm font-semibold text-[#2DD4BF]">
          {experience.period}
        </p>

        <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
          {experience.location}
        </p>

        {/* Desktop timeline */}
        <div className="absolute right-[-1px] top-1 hidden h-full w-px bg-[#1E293B] md:block" />

        <div className="absolute right-[-5px] top-1 hidden h-2.5 w-2.5 rounded-full bg-[#2DD4BF] md:block" />

      </div>

      {/* Experience content */}
      <div className="rounded-2xl border border-[#1E293B] bg-[#0D1726]/70 p-5 transition duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#0D1726] sm:p-6">

        {/* Header */}
        <div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#2DD4BF] sm:text-xs sm:tracking-[0.18em]">
            Professional Experience
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
            {experience.company}
          </h3>

          <p className="mt-1.5 text-base font-medium leading-6 text-slate-300 sm:text-lg">
            {experience.role}
          </p>

        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-slate-400 sm:mt-6">
          {experience.description}
        </p>

        {/* Highlights */}
        <div className="mt-6">

          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.15em]">
            What I Worked On
          </p>

          <ul className="mt-3 space-y-3 sm:mt-4">
            {experience.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-6 text-slate-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2DD4BF]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* Technologies */}
        <div className="mt-6">

          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.15em]">
            Technologies & Areas
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-[#1E293B] bg-[#08111F] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition hover:border-[#334155] sm:px-3 sm:py-2 sm:text-xs"
              >
                {technology}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[#1E293B] px-5 py-14 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF] sm:text-sm sm:tracking-[0.2em]">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Engineering, Data & Business Experience
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            Experience across software engineering, DevOps, cloud
            infrastructure, data and retail operations.
          </p>

        </div>

        {/* Professional timeline */}
        <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
          {professionalExperience.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>

        {/* Volunteer experience */}
        <div className="mt-12 sm:mt-16">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF] sm:text-sm sm:tracking-[0.2em]">
              Community
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Volunteer Experience
            </h3>
          </div>

          <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
            {volunteerExperience.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.role}`}
                experience={experience}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}