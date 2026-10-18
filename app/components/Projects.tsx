"use client";

import { useState } from "react";
import { projects } from "../data/projects";

const retailScreenshots = [
  {
    src: "/images/retail-inventory/kpi-results.png",
    alt: "Retail business KPI results",
    title: "Business KPI Results",
  },
  {
    src: "/images/retail-inventory/inventory-analysis.png",
    alt: "Retail inventory analysis",
    title: "Inventory Analysis",
  },
  {
    src: "/images/retail-inventory/dashboard.png",
    alt: "Retail Intelligence analytics dashboard",
    title: "Analytics Dashboard",
  },
];

const retailLiveScreenshots = [
  {
    src: "/images/retail-intelligence-platform/dashboard_overview.png",
    alt: "Retail Intelligence Platform dashboard overview",
    title: "Dashboard Overview",
  },
  {
    src: "/images/retail-intelligence-platform/historical_indicator.png",
    alt: "Historical retail data indicators",
    title: "Historical Indicators",
  },
  {
    src: "/images/retail-intelligence-platform/pricing_analysis.png",
    alt: "Retail pricing analysis and review indicators",
    title: "Pricing Analysis",
  },
  {
    src: "/images/retail-intelligence-platform/data_explorer.png",
    alt: "Interactive retail data explorer",
    title: "Data Explorer",
  },
];

const aiReviewScreenshots = [
  {
    src: "/images/ai-customer-review/sentiment_distribution.png",
    alt: "Customer review sentiment distribution",
    title: "Sentiment Distribution",
  },
  {
    src: "/images/ai-customer-review/negative_review_share_by_category.png",
    alt: "Negative review share by category",
    title: "Negative Reviews by Category",
  },
  {
    src: "/images/ai-customer-review/complaint_theme_heatmap.png",
    alt: "Heatmap of customer complaint themes",
    title: "Complaint Theme Analysis",
  },
];

const cloudDevOpsScreenshots = [
  {
    src: "/images/cloud-devops-analytics/grafana-api-monitoring.png",
    alt: "Grafana API monitoring dashboard",
    title: "API Monitoring",
  },
  {
    src: "/images/cloud-devops-analytics/prometheus-target-health.png",
    alt: "Prometheus target health for application and container monitoring",
    title: "Prometheus Target Health",
  },
  {
    src: "/images/cloud-devops-analytics/grafana-container-cpu.png",
    alt: "Grafana container CPU usage dashboard",
    title: "Container CPU Usage",
  },
  {
    src: "/images/cloud-devops-analytics/prometheus-alert-rules.png",
    alt: "Prometheus alert rules for the Cloud and DevOps platform",
    title: "Prometheus Alert Rules",
  },
];


export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  function toggleProject(title: string) {
    setExpandedProjects((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  }

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
            Projects That Combine Data &amp; Engineering
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            A selection of work demonstrating how I apply data analytics,
            machine learning, software engineering and cloud technologies to
            practical problems.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
          {projects.map((project, index) => {
            const isRetailProject =
              project.title === "Retail Intelligence Platform";
            const isAIReviewProject =
              project.title === "AI Customer Review Intelligence";
            const isCloudDevOpsProject =
              project.title === "Cloud & DevOps Platform";

            const isExpanded = expandedProjects.includes(project.title);

            return (
              <article
                key={project.title}
                className={`group rounded-2xl border border-[#1E293B] bg-[#0D1726]/70 p-5 transition duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#0D1726] sm:p-6 ${
                  index === 0 ? "md:p-10" : "md:p-8"
                }`}
              >
                {/* Existing project layout */}
                <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
                  {/* Main information */}
                  <div>
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

                    <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                      {project.title}
                    </h3>

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

                  {/* Technologies and outcomes */}
                  <div>
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

                {/* Retail-only interactive preview */}
                {isRetailProject && (
                  <div className="mt-6 border-t border-[#1E293B] pt-5">
                    <button
                      type="button"
                      onClick={() => toggleProject(project.title)}
                      aria-expanded={isExpanded}
                      aria-controls="retail-dashboard-previews"
                      className="flex w-full items-center justify-between gap-4 rounded-lg py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF]"
                    >
                      <span className="text-sm font-semibold text-[#2DD4BF]">
                        {isExpanded
                          ? "Hide dashboard previews"
                          : "Explore dashboards & results"}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`text-xl text-[#2DD4BF] transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        â†“
                      </span>
                    </button>

                    <div
                      id="retail-dashboard-previews"
                      aria-hidden={!isExpanded}
                      inert={!isExpanded}
                      className={`grid grid-cols-1 gap-4 overflow-hidden transition-all duration-500 ease-in-out sm:grid-cols-2 lg:grid-cols-3 ${
                        isExpanded
                          ? "mt-5 max-h-[2000px] translate-y-0 opacity-100"
                          : "pointer-events-none mt-0 max-h-0 -translate-y-2 opacity-0"
                      }`}
                    >
                      {retailScreenshots.map((screenshot) => (
                        <div
                          key={screenshot.src}
                          className="min-w-0 overflow-hidden rounded-xl border border-[#1E293B] bg-[#08111F]"
                        >
                          <a
                            href={screenshot.src}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${screenshot.title} image in a new tab`}
                            tabIndex={isExpanded ? 0 : -1}
                            className="block overflow-hidden"
                          >
                            <img
                              src={screenshot.src}
                              alt={screenshot.alt}
                              loading="lazy"
                              className="aspect-[4/3] w-full object-contain transition duration-500 hover:scale-[1.03]"
                            />
                          </a>

                          <p className="px-3 py-3 text-xs font-medium text-slate-300 sm:text-sm">
                            {screenshot.title}
                          </p>
                        </div>
                      ))}

                      {/* Business results */}

                      {/* Business results */}
                      <div className="rounded-xl border border-[#1E293B] bg-[#08111F] p-4 sm:col-span-2 lg:col-span-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2DD4BF]">
                          Data Quality &amp; Review Indicators
                        </p>

                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <p className="text-xs text-slate-500">
                              Historical records analysed
                            </p>
                            <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
                              75,996
                            </p>
                          </div>

                          <div>
                            <p className="text-xs text-slate-500">
                              Records matching review rules
                            </p>
                            <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
                              17,812
                            </p>
                          </div>
                        </div>

                        <p className="mt-4 text-xs leading-5 text-slate-500">
                          Review rules identify records for further investigation;
                          flagged records are not necessarily confirmed data or pricing errors.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Retail live dashboard screenshot gallery */}
                {isRetailProject && (
                  <div className="mt-5 border-t border-[#1E293B] pt-5">
                    <button
                      type="button"
                      onClick={() =>
                        toggleProject(`${project.title}-live-gallery`)
                      }
                      aria-expanded={expandedProjects.includes(
                        `${project.title}-live-gallery`
                      )}
                      aria-controls="retail-live-dashboard-previews"
                      className="flex w-full items-center justify-between gap-4 rounded-lg py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF]"
                    >
                      <span className="text-sm font-semibold text-[#2DD4BF]">
                        {expandedProjects.includes(
                          `${project.title}-live-gallery`
                        )
                          ? "Hide live dashboard screenshots"
                          : "View live dashboard screenshots"}
                      </span>
                      <span aria-hidden="true" className="text-xl text-[#2DD4BF]">
                        {expandedProjects.includes(
                          `${project.title}-live-gallery`
                        )
                          ? "−"
                          : "+"}
                      </span>
                    </button>

                    <div
                      id="retail-live-dashboard-previews"
                      aria-hidden={
                        !expandedProjects.includes(
                          `${project.title}-live-gallery`
                        )
                      }
                      inert={
                        !expandedProjects.includes(
                          `${project.title}-live-gallery`
                        )
                      }
                      className={`grid grid-cols-1 gap-4 overflow-hidden transition-all duration-500 ease-in-out sm:grid-cols-2 lg:grid-cols-4 ${
                        expandedProjects.includes(
                          `${project.title}-live-gallery`
                        )
                          ? "mt-5 max-h-[2000px] opacity-100"
                          : "pointer-events-none mt-0 max-h-0 opacity-0"
                      }`}
                    >
                      {retailLiveScreenshots.map((screenshot) => (
                        <div
                          key={screenshot.src}
                          className="min-w-0 overflow-hidden rounded-xl border border-[#1E293B] bg-[#08111F]"
                        >
                          <a
                            href={screenshot.src}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${screenshot.title} image in a new tab`}
                            tabIndex={
                              expandedProjects.includes(
                                `${project.title}-live-gallery`
                              )
                                ? 0
                                : -1
                            }
                            className="block overflow-hidden"
                          >
                            <img
                              src={screenshot.src}
                              alt={screenshot.alt}
                              loading="lazy"
                              className="aspect-[4/3] w-full object-contain transition duration-500 hover:scale-[1.03]"
                            />
                          </a>
                          <p className="px-3 py-3 text-xs font-medium text-slate-300 sm:text-sm">
                            {screenshot.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cloud & DevOps monitoring screenshot gallery */}
                {isCloudDevOpsProject && (
                  <div className="mt-5 border-t border-[#1E293B] pt-5">
                    <button
                      type="button"
                      onClick={() =>
                        toggleProject(`${project.title}-cloud-gallery`)
                      }
                      aria-expanded={expandedProjects.includes(
                        `${project.title}-cloud-gallery`
                      )}
                      aria-controls="cloud-devops-dashboard-previews"
                      className="flex w-full items-center justify-between gap-4 rounded-lg py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF]"
                    >
                      <span className="text-sm font-semibold text-[#2DD4BF]">
                        {expandedProjects.includes(
                          `${project.title}-cloud-gallery`
                        )
                          ? "Hide monitoring screenshots"
                          : "View monitoring screenshots"}
                      </span>
                      <span aria-hidden="true" className="text-xl text-[#2DD4BF]">
                        {expandedProjects.includes(
                          `${project.title}-cloud-gallery`
                        )
                          ? "−"
                          : "+"}
                      </span>
                    </button>

                    <div
                      id="cloud-devops-dashboard-previews"
                      aria-hidden={
                        !expandedProjects.includes(
                          `${project.title}-cloud-gallery`
                        )
                      }
                      inert={
                        !expandedProjects.includes(
                          `${project.title}-cloud-gallery`
                        )
                      }
                      className={`grid grid-cols-1 gap-4 overflow-hidden transition-all duration-500 ease-in-out sm:grid-cols-2 lg:grid-cols-4 ${
                        expandedProjects.includes(
                          `${project.title}-cloud-gallery`
                        )
                          ? "mt-5 max-h-[2000px] opacity-100"
                          : "pointer-events-none mt-0 max-h-0 opacity-0"
                      }`}
                    >
                      {cloudDevOpsScreenshots.map((screenshot) => (
                        <div
                          key={screenshot.src}
                          className="min-w-0 overflow-hidden rounded-xl border border-[#1E293B] bg-[#08111F]"
                        >
                          <a
                            href={screenshot.src}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${screenshot.title} image in a new tab`}
                            tabIndex={
                              expandedProjects.includes(
                                `${project.title}-cloud-gallery`
                              )
                                ? 0
                                : -1
                            }
                            className="block overflow-hidden"
                          >
                            <img
                              src={screenshot.src}
                              alt={screenshot.alt}
                              loading="lazy"
                              className="aspect-[4/3] w-full object-contain transition duration-500 hover:scale-[1.03]"
                            />
                          </a>
                          <p className="px-3 py-3 text-xs font-medium text-slate-300 sm:text-sm">
                            {screenshot.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Retail Intelligence project resource links */}
                {isRetailProject && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://liki2124-retail-intelligence-platform-app-idlzfp.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#2DD4BF] px-4 py-2.5 text-sm font-semibold text-[#08111F] transition hover:bg-[#5EEAD4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF]"
                    >
                      Live Dashboard
                      <span aria-hidden="true">â†—</span>
                    </a>

                    <a
                      href="https://github.com/liki2124/Retail-Intelligence-Platform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#334155] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-[#2DD4BF] hover:text-[#2DD4BF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF]"
                    >
                      GitHub Repository
                      <span aria-hidden="true">â†—</span>
                    </a>
                  </div>
                )}

                {/* AI project resource links */}
                {isAIReviewProject && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://ai-customer-review-intelligence-eqbb4w5msidzycscsckulc.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#2DD4BF] px-4 py-2.5 text-sm font-semibold text-[#08111F] transition hover:bg-[#5EEAD4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF]"
                    >
                      Live Dashboard
                      <span aria-hidden="true">â†—</span>
                    </a>

                    <a
                      href="https://github.com/liki2124/AI-Customer-Review-Intelligence"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#334155] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-[#2DD4BF] hover:text-[#2DD4BF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF]"
                    >
                      GitHub Repository
                      <span aria-hidden="true">â†—</span>
                    </a>
                  </div>
                )}

              {/* AI Customer Review interactive preview */}
{isAIReviewProject && (
  <div className="mt-6 border-t border-[#1E293B] pt-5">
    <button
      type="button"
      onClick={() => toggleProject(project.title)}
      aria-expanded={isExpanded}
      aria-controls="ai-review-previews"
      className="flex w-full items-center justify-between gap-4 rounded-lg py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DD4BF]"
    >
      <span className="text-sm font-semibold text-[#2DD4BF]">
        {isExpanded
          ? "Hide model results & charts"
          : "Explore model results & sentiment analysis"}
      </span>

      <span
        aria-hidden="true"
        className={`text-xl text-[#2DD4BF] transition-transform duration-300 ${
          isExpanded ? "rotate-180" : ""
        }`}
      >
        â†“
      </span>
    </button>

    <div
      id="ai-review-previews"
      aria-hidden={!isExpanded}
      inert={!isExpanded}
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded
          ? "mt-5 max-h-[3000px] translate-y-0 opacity-100"
          : "pointer-events-none mt-0 max-h-0 -translate-y-2 opacity-0"
      }`}
    >
      {/* Model performance metrics */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: "Model Accuracy", value: "84.32%" },
          { label: "Macro F1 Score", value: "67.79%" },
          { label: "Weighted F1 Score", value: "85.81%" },
          { label: "Test Samples", value: "12,178" },
        ].map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-[#1E293B] bg-[#08111F] p-4"
          >
            <p className="text-xs leading-5 text-slate-500">
              {metric.label}
            </p>
            <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-[#1E293B] bg-[#08111F] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2DD4BF]">
          Best displayed model
        </p>
        <p className="mt-2 text-sm font-semibold text-white">
          TF-IDF + Logistic Regression
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Text classification using TF-IDF features and Logistic Regression,
          evaluated on a held-out test set.
        </p>
      </div>

      {/* Sentiment and complaint analysis charts */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aiReviewScreenshots.map((screenshot) => (
          <div
            key={screenshot.src}
            className="min-w-0 overflow-hidden rounded-xl border border-[#1E293B] bg-[#08111F]"
          >
            <a
              href={screenshot.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${screenshot.title} image in a new tab`}
              tabIndex={isExpanded ? 0 : -1}
              className="block overflow-hidden"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-contain transition duration-500 hover:scale-[1.03]"
              />
            </a>

            <p className="px-3 py-3 text-xs font-medium text-slate-300 sm:text-sm">
              {screenshot.title}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Model metrics are from the project's saved evaluation results.
        Click any chart to open the full-size image.
      </p>
    </div>
  </div>
)}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


