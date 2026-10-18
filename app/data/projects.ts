
export const projects = [
  {
    title: "Retail Intelligence Platform",
    category: "Retail Analytics & Data Engineering",
    featured: true,

    description:
      "An interactive retail analytics platform that transforms product and historical sales records into structured business insights. The dashboard combines data preparation, SQL analysis, pricing-quality review indicators and interactive visualisation.",

    problem:
      "Retail datasets can contain inconsistent records and pricing patterns that require investigation. Teams need a structured way to explore historical sales indicators, compare product attributes and identify records that may warrant further review.",

    solution:
      "Built a Python and Pandas data pipeline to clean and prepare retail records, stored analytical tables in SQLite, and developed SQL analyses for sales performance, marketing, pricing and release-year patterns. Created a Streamlit dashboard with Plotly visualisations, interactive filters and downloadable data. Added six pricing-review flags to help prioritise records for investigation; these flags are indicators, not confirmed errors.",

    technologies: [
      "Python",
      "Pandas",
      "SQL",
      "SQLite",
      "Streamlit",
      "Plotly",
      "Data Quality",
      "Retail Analytics",
    ],

    outcomes: [
      "Processed and organised retail records into analysis-ready datasets",
      "Developed five SQL analyses covering sales, marketing, pricing, release-year patterns and pricing-review flags",
      "Built an interactive dashboard with filters, visualisations and CSV export",
      "Identified records matching one or more pricing-review rules for further investigation",
    ],
  },
  {
    title: "AI Customer Review Intelligence",
    category: "NLP & Machine Learning",
    description:
      "An end-to-end customer review analytics project analysing 60K+ reviews with Python, natural language processing and machine learning to explore sentiment, compare negative feedback across product categories and surface recurring customer concerns.",

    problem:
      "Large volumes of customer reviews contain useful feedback about product quality, reliability, value and customer service, but manual review is inefficient and makes recurring themes difficult to compare at scale.",

    solution:
      "Developed a Python-based workflow for data preparation, text analysis, feature engineering and machine learning experimentation. Analysed sentiment patterns and recurring complaint themes, compared model approaches and organised findings by product category to support customer-experience analysis.",

    technologies: [
      "Python",
      "Pandas",
      "NLP",
      "Scikit-learn",
      "XGBoost",
      "Machine Learning",
      "Sentiment Analysis",
    ],

    outcomes: [
      "Analysed more than 60,000 customer reviews",
      "Compared negative-feedback themes across product categories",
      "Organised recurring complaints into business-relevant themes",
    ],
  },
  {
    title: "Cloud & DevOps Platform",
    category: "Cloud Infrastructure & DevOps",
    featured: true,

    description:
      "A containerised analytics platform demonstrating application deployment, Kubernetes orchestration, infrastructure automation and observability using Docker, Terraform, Prometheus and Grafana.",

    problem:
      "Manual deployment steps and fragmented monitoring can make infrastructure harder to reproduce, troubleshoot and maintain. This project explores repeatable deployment workflows and centralised operational visibility.",

    solution:
      "Containerised a Python API with Docker Compose, deployed the API to a local Kubernetes cluster using kind, and used Terraform to manage Kubernetes resources. Configured Prometheus to scrape application, container and Kubernetes API metrics, built Grafana dashboards for request volume, latency, HTTP errors, target health and container CPU usage, and added five alert rules for availability, CPU, server errors and latency.",

    technologies: [
      "Python",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Terraform",
      "Prometheus",
      "Grafana",
      "CI/CD",
    ],

    images: [
      {
        src: "/images/cloud-devops-analytics/grafana-api-monitoring.png",
        alt: "Grafana API monitoring dashboard",
        caption: "API requests, latency and HTTP error monitoring",
      },
      {
        src: "/images/cloud-devops-analytics/prometheus-target-health.png",
        alt: "Prometheus target health",
        caption: "Application, container and Kubernetes monitoring targets",
      },
      {
        src: "/images/cloud-devops-analytics/grafana-container-cpu.png",
        alt: "Grafana container CPU usage dashboard",
        caption: "Container CPU usage from Prometheus metrics",
      },
      {
        src: "/images/cloud-devops-analytics/prometheus-alert-rules.png",
        alt: "Prometheus alert rules",
        caption: "Availability, CPU, HTTP error and latency alert rules",
      },
    ],

    outcomes: [
      "Containerised the API and ran it in a local Kubernetes cluster",
      "Managed Kubernetes resources with Terraform",
      "Monitored API, container and Kubernetes metrics using Prometheus",
      "Built Grafana dashboards for API performance, target health and CPU usage",
      "Configured and validated five Prometheus alert rules",
    ],
  },
];
