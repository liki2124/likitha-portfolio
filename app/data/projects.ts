
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
  },  {
    title: "Cloud & DevOps Platform",
    category: "Cloud Infrastructure & DevOps",
    description:
      "A hands-on cloud and DevOps platform project exploring containerised application deployment, infrastructure automation and observability through a practical engineering workflow.",

    problem:
      "Inconsistent deployment steps and manually managed infrastructure can increase configuration risk, complicate environment setup and make application behaviour harder to monitor.",

    solution:
      "Developed a containerised application workflow using Docker and Python, with the project extending into infrastructure-as-code, Kubernetes orchestration and monitoring. The focus is on repeatable deployments, maintainable infrastructure and improved operational visibility as the platform evolves.",

    technologies: [
      "Python",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Prometheus",
      "Grafana",
      "CI/CD",
    ],
    outcomes: [
      "Built a containerised application workflow",
      "Developing infrastructure automation and orchestration capabilities",
      "Extending monitoring and observability with Prometheus and Grafana",
    ],
  },
];
