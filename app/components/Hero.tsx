import { hero } from "../Data/hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2DD4BF]/10 blur-3xl sm:h-96 sm:w-96" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 hidden h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl sm:block" />

      <div className="relative mx-auto max-w-6xl">

        {/* Main introduction */}
        <div className="max-w-4xl">

          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF] sm:text-sm sm:tracking-[0.25em]">
            {hero.eyebrow}
          </p>

          <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-5xl md:text-7xl">
            {hero.name}
          </h1>

          <h2 className="animate-fade-up-delay-2 mt-4 text-2xl font-semibold leading-tight text-slate-200 sm:mt-6 sm:text-3xl md:text-5xl">
            {hero.title}
          </h2>

          <p className="animate-fade-up-delay-3 mt-3 text-lg font-medium leading-7 text-[#2DD4BF] sm:text-xl md:text-2xl">
            {hero.subtitle}
          </p>

          <p className="animate-fade-up-delay-4 mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            {hero.description}
          </p>

          {/* Buttons */}
          <div className="animate-fade-up-delay-4 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">

            <a
              href={hero.primaryAction.href}
              className="w-full rounded-xl bg-[#2DD4BF] px-6 py-3.5 text-center text-sm font-semibold text-[#08111F] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(45,212,191,0.15)] hover:opacity-90 sm:w-auto"
            >
              {hero.primaryAction.label}
            </a>

            <a
              href={hero.secondaryAction.href}
              className="w-full rounded-xl border border-[#334155] px-6 py-3.5 text-center text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF] hover:text-[#2DD4BF] sm:w-auto"
            >
              {hero.secondaryAction.label}
            </a>

          </div>

        </div>

        {/* Technical highlights */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4">

          <div className="animate-card-1 rounded-2xl border border-[#1E293B] bg-[#0D1726]/80 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/40 sm:p-5">
            <p className="text-xl font-bold text-[#2DD4BF] sm:text-2xl">
              Data
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
              Python · SQL · Analytics · BI
            </p>
          </div>

          <div className="animate-card-2 rounded-2xl border border-[#1E293B] bg-[#0D1726]/80 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/40 sm:p-5">
            <p className="text-xl font-bold text-[#2DD4BF] sm:text-2xl">
              Cloud
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
              Azure · AWS · Infrastructure
            </p>
          </div>

          <div className="animate-card-3 rounded-2xl border border-[#1E293B] bg-[#0D1726]/80 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/40 sm:p-5">
            <p className="text-xl font-bold text-[#2DD4BF] sm:text-2xl">
              DevOps
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
              Docker · Kubernetes · Terraform
            </p>
          </div>

          <div className="animate-card-4 rounded-2xl border border-[#1E293B] bg-[#0D1726]/80 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/40 sm:p-5">
            <p className="text-xl font-bold text-[#2DD4BF] sm:text-2xl">
              AI / ML
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
              NLP · PyTorch · Scikit-learn
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}