import { contact } from "../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#1E293B] px-5 py-12 sm:px-6 sm:py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2DD4BF] sm:text-sm sm:tracking-[0.2em]">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
          Let’s Connect
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
          {contact.message}
        </p>

        {/* Contact buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">

          <a
            href={`mailto:${contact.email}`}
            className="w-full rounded-xl bg-[#2DD4BF] px-5 py-3.5 text-center text-sm font-semibold text-[#08111F] transition duration-300 hover:-translate-y-1 hover:opacity-90 sm:w-auto"
          >
            Email Me
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl border border-[#1E293B] px-5 py-3.5 text-center text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF] hover:text-[#2DD4BF] sm:w-auto"
          >
            LinkedIn
          </a>

          <a
            href={contact.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl border border-[#1E293B] px-5 py-3.5 text-center text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-[#2DD4BF] hover:text-[#2DD4BF] sm:w-auto"
          >
            Call Me
          </a>

        </div>

      </div>
    </section>
  );
}