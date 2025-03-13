import "../styles/stats-section.css";

interface StatsSectionProps {
  stats: {
    value: string;
    label: string;
  }[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
