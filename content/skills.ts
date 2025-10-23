export type SkillGroup = { group: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { group: 'Cloud Platforms', items: ['AWS', 'GCP', 'Azure'] },
  { group: 'Containers & Orchestration', items: ['Docker', 'Kubernetes', 'EKS', 'Helm'] },
  { group: 'Infrastructure as Code', items: ['Terraform', 'Ansible', 'Packer'] },
  { group: 'CI/CD & Scripting', items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD', 'Python', 'Bash'] },
  { group: 'Monitoring & Logging', items: ['Prometheus', 'Grafana', 'ELK/Opensearch', 'Loki', 'Datadog', 'CloudWatch'] },
  { group: 'Reliability & Security', items: ['SLOs/SLIs', 'Chaos Engineering', 'Incident Response', 'IAM', 'Cost Optimization'] }
];
