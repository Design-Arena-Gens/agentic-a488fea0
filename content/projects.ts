export type Project = {
  title: string;
  description: string;
  role: string;
  tech: string[];
  impact: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Kubernetes Platform on AWS EKS',
    description: 'Designed and operated a multi-tenant EKS platform with automated cluster provisioning and GitOps.',
    role: 'SRE/Platform Engineer',
    tech: ['AWS', 'EKS', 'Terraform', 'Helm', 'ArgoCD', 'Prometheus'],
    impact: 'Improved deployment frequency 5x and reduced MTTR by 35%.'
  },
  {
    title: 'End-to-end CI/CD Modernization',
    description: 'Migrated legacy pipelines to GitHub Actions with reusable workflows, policy checks and canary deploys.',
    role: 'DevOps Engineer',
    tech: ['GitHub Actions', 'Docker', 'Kubernetes', 'OPA', 'Canary'],
    impact: 'Cut release time from 2 weeks to under 2 hours.'
  },
  {
    title: 'Observability Stack Overhaul',
    description: 'Built metrics, logs and tracing with SLO dashboards and on-call automation.',
    role: 'SRE',
    tech: ['Prometheus', 'Loki', 'Tempo/Jaeger', 'Grafana', 'Alertmanager'],
    impact: 'Reduced alert noise by 60% and increased on-call satisfaction.'
  }
];
