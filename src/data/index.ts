export const skills = [
  {
    num: '01',
    title: 'Backend Engineering',
    desc: 'High-performance server-side architecture with clean API design and scalable patterns.',
    tags: ['Node.js', 'Python', 'Go', 'Java', 'REST', 'GraphQL', 'gRPC'],
  },
  {
    num: '02',
    title: 'Databases',
    desc: 'Expert in relational and non-relational stores with deep focus on query optimisation and data modelling.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra', 'MySQL'],
  },
  {
    num: '03',
    title: 'Cloud & Infrastructure',
    desc: 'Designing cloud-native architectures that scale with demand and minimise operational overhead.',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Serverless'],
  },
  {
    num: '04',
    title: 'DevOps & Observability',
    desc: 'Reliable CI/CD pipelines with deep monitoring, distributed tracing, and alerting systems.',
    tags: ['GitHub Actions', 'Prometheus', 'Grafana', 'OpenTelemetry', 'ELK Stack'],
  },
  {
    num: '05',
    title: 'Security & Auth',
    desc: 'Enterprise-grade security patterns, authentication flows, and fine-grained access control.',
    tags: ['JWT', 'OAuth 2.0', 'OpenID Connect', 'mTLS', 'RBAC', 'WAF'],
  },
  {
    num: '06',
    title: 'System Design',
    desc: 'Large-scale distributed systems with CAP theorem, eventual consistency, and fault tolerance at the core.',
    tags: ['Microservices', 'Event Sourcing', 'CQRS', 'Kafka', 'Message Queues'],
  },
];

export const projects = [
  {
    num: '01',
    year: '2024',
    type: 'API Gateway',
    title: 'Nexus Gateway',
    desc: 'High-throughput API gateway for microservices orchestration. Handles routing, rate limiting, authentication, and real-time analytics — processing over 1M requests per day with sub-10ms median latency.',
    highlights: [
      'Event-driven routing with dynamic service discovery',
      'Circuit breaker pattern with intelligent failover',
      'In-memory rate limiting via Redis cluster',
      'JWT validation at edge with public key caching',
    ],
    tech: ['Node.js', 'Redis', 'PostgreSQL', 'Kubernetes', 'Prometheus', 'AWS EKS'],
  },
  {
    num: '02',
    year: '2023',
    type: 'Data Pipeline',
    title: 'StreamDB Engine',
    desc: 'Real-time event streaming and analytics engine built for high-volume data ingestion. Processes and aggregates millions of events per hour with custom windowing functions and materialised views.',
    highlights: [
      'Apache Kafka for event streaming with consumer groups',
      'Time-series storage with custom compression algorithms',
      'CQRS pattern separating read and write workloads',
      'Horizontal scaling via stateless worker pods',
    ],
    tech: ['Go', 'Apache Kafka', 'ClickHouse', 'TimescaleDB', 'gRPC', 'Docker'],
  },
  {
    num: '03',
    year: '2023',
    type: 'Auth Service',
    title: 'VaultAuth',
    desc: 'Distributed authentication and authorisation service supporting OAuth 2.0, OpenID Connect, and fine-grained RBAC. Powers auth for 200K+ active users across multiple product lines with zero security incidents.',
    highlights: [
      'Stateless JWT with refresh token rotation',
      'Multi-tenant RBAC with policy inheritance',
      'Cryptographic session binding & device fingerprinting',
      'Distributed token blacklist with Redis pub/sub',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'OAuth 2.0', 'GCP'],
  },
  {
    num: '04',
    year: '2022',
    type: 'Infrastructure',
    title: 'ZeroDown Migrations',
    desc: 'A zero-downtime database migration framework for PostgreSQL. Enables schema changes on live production databases without service interruption using dual-write patterns and shadow tables.',
    highlights: [
      'Dual-write with background data backfill',
      'Automated rollback triggers on error thresholds',
      'Schema change validation with dry-run mode',
      'Lock-free column adds and concurrent index creation',
    ],
    tech: ['Python', 'PostgreSQL', 'Alembic', 'GitHub Actions', 'Terraform'],
  },
];

export const experience = [
  {
    period: '2021 — 2026',
    role: 'Backend Developer',
    company: 'DataFlow Technologies',
    desc: 'Built and scaled data ingestion pipelines processing 50GB+ daily. Implemented event sourcing architecture and migrated a monolithic system to microservices. Achieved 99.95% uptime through redundancy and circuit breaker patterns.',
    tags: ['Python', 'Kafka', 'MongoDB', 'Docker', 'GCP'],
  },
  {
    period: '2019 — 2021',
    role: 'Software Engineer',
    company: 'TechCorp Solutions',
    desc: 'Developed RESTful APIs for a fintech platform serving 100K+ users. Implemented payment processing integrations, webhook systems, and automated reconciliation pipelines. Reduced deployment time by 40% with internal tooling.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Jenkins'],
  },
  {
    period: '2015 — 2019',
    role: 'B.E. Computer Science',
    company: 'Anna University — Distinction',
    desc: 'Specialised in distributed computing, database systems, and operating systems. Final year project: distributed key-value store with Raft consensus protocol implementation.',
    tags: ['Distributed Systems', 'Algorithms', 'Computer Science'],
  },
];

export const stats = [
  { value: 5, suffix: '+', label: 'Years Engineering' },
  { value: 50, suffix: '+', label: 'APIs Shipped' },
  { value: 99, suffix: '.9%', label: 'Uptime SLA' },
  { value: 1, suffix: 'M+ RPS', label: 'Throughput Handled' },
];
