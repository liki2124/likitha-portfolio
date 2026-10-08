import { highlights } from "../Data/highlights";

export default function Highlights() {
  return (
    <section className="px-5 pb-14 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0D1726]/70 lg:grid-cols-4">

          {highlights.map((highlight, index) => (
            <div
              key={highlight.label}
              className={`group p-4 transition duration-300 hover:bg-[#111E30] sm:p-6 ${
                index === 1
                  ? "border-l border-[#1E293B]"
                  : ""
              } ${
                index >= 2
                  ? "border-t border-[#1E293B] lg:border-t-0"
                  : ""
              } ${
                index === 3
                  ? "lg:border-l"
                  : index === 2
                    ? "lg:border-l"
                    : ""
              }`}
            >
              <p className="text-xl font-bold tracking-tight text-[#2DD4BF] sm:text-2xl md:text-3xl">
                {highlight.value}
              </p>

              <h3 className="mt-2 text-xs font-semibold leading-5 text-slate-200 sm:text-sm">
                {highlight.label}
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-slate-500 sm:text-xs">
                {highlight.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}