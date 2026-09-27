import { BarChart2, Target, Award, TrendingUp, RefreshCw } from 'lucide-react';

interface ProgressStatsProps {
  totalItems: number;
  masteredItems: number;
  streak: number;
  categoryStats: Array<{ category: string; label: string; total: number; mastered: number }>;
  levelStats: Array<{ level: string; label: string; total: number; mastered: number }>;
  onReset: () => void;
}

export function ProgressStats({ totalItems, masteredItems, streak, categoryStats, levelStats, onReset }: ProgressStatsProps) {
  const overallProgress = totalItems > 0 ? Math.round((masteredItems / totalItems) * 100) : 0;

  const getProgressColor = (percent: number) => {
    if (percent === 100) return 'var(--success)';
    if (percent >= 75) return '#6366f1';
    if (percent >= 50) return 'var(--accent-primary)';
    if (percent >= 25) return '#f59e0b';
    return 'var(--text-muted)';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BarChart2 size={24} style={{ color: 'var(--accent-primary)' }} />
              Learning Progress
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Track your Sanskrit to Telugu learning journey
            </p>
          </div>
          <button onClick={onReset} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RefreshCw size={18} /> Reset Progress
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
          <StatCard
            icon={Target}
            value={`${overallProgress}%`}
            label="Overall Progress"
            color="var(--accent-primary)"
            subtitle={`${masteredItems} / ${totalItems} items mastered`}
          />
          <StatCard
            icon={Award}
            value={masteredItems}
            label="Mastered Items"
            color="var(--success)"
            subtitle={masteredItems === totalItems ? 'All items mastered! 🎉' : `${totalItems - masteredItems} remaining`}
          />
          <StatCard
            icon={TrendingUp}
            value={streak}
            label="Current Streak"
            color="#f59e0b"
            subtitle={streak === 1 ? '1 day' : `${streak} days in a row`}
          />
          <StatCard
            icon={BarChart2}
            value={categoryStats.filter(c => c.mastered === c.total && c.total > 0).length}
            label="Completed Categories"
            color="#6366f1"
            subtitle={`${categoryStats.length} categories total`}
          />
        </div>
      </div>

      <div className="card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BarChart2 size={20} style={{ color: 'var(--accent-primary)' }} />
          By Category
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {categoryStats.map(stat => {
            const percent = stat.total > 0 ? Math.round((stat.mastered / stat.total) * 100) : 0;
            return (
              <StatRow
                key={stat.category}
                label={stat.label}
                value={`${stat.mastered} / ${stat.total}`}
                percent={percent}
                color={getProgressColor(percent)}
              />
            );
          })}
        </div>
      </div>

      <div className="card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Award size={20} style={{ color: 'var(--success)' }} />
          By Level
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {levelStats.map(stat => {
            const percent = stat.total > 0 ? Math.round((stat.mastered / stat.total) * 100) : 0;
            return (
              <StatRow
                key={stat.level}
                label={stat.label}
                value={`${stat.mastered} / ${stat.total}`}
                percent={percent}
                color={getProgressColor(percent)}
              />
            );
          })}
        </div>
      </div>

      {masteredItems === totalItems && totalItems > 0 && (
        <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--success-light), #f0fdf4)', borderColor: 'var(--success)' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--success)', marginBottom: '0.5rem' }}>
            Congratulations!
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            You've mastered all {totalItems} Sanskrit items! Your dedication to learning Sanskrit is remarkable.
          </p>
          <button onClick={onReset} className="btn btn-primary">
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}

function StatCard({ icon: Icon, value, label, color, subtitle }: {
  icon: React.ComponentType<{ size?: number }>;
  value: string | number;
  label: string;
  color: string;
  subtitle: string;
}) {
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
        <Icon size={24} style={{ color }} />
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{value}</div>
      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.25rem' }}>{label}</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{subtitle}</div>
    </div>
  );
}

function StatRow({ label, value, percent, color }: { label: string; value: string; percent: number; color: string }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{label}</span>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>{value}</span>
      </div>
      <div style={{ height: '8px', background: 'var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{
          width: `${percent}%`, height: '100%', background: color,
          borderRadius: '4px', transition: 'width 0.5s ease'
        }} />
      </div>
    </div>
  );
}