import { Flame, Target, Brain, Award } from 'lucide-react';

interface HeaderProps {
  streak: number;
  progress: number;
  masteredCount: number;
  totalCount: number;
}

export function Header({ streak, progress, masteredCount, totalCount }: HeaderProps) {
  return (
    <header style={{
      background: 'var(--bg-card)',
      borderBottom: '1px solid var(--border)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(8px)',
      backgroundColor: 'rgba(254, 252, 248, 0.9)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
          }}>
            🕉️
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Sanskrit Learning
            </h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Sanskrit → Telugu
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.35rem', color: 'var(--accent-primary)', fontWeight: 600, fontSize: '1.125rem' }}>
              <Flame size={18} /> {streak}
            </div>
            <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Day Streak
            </div>
          </div>

          <div style={{ textAlign: 'right', minWidth: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.35rem', fontWeight: 600, fontSize: '1.125rem', color: 'var(--text-primary)' }}>
              {masteredCount} / {totalCount}
            </div>
            <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Mastered
            </div>
          </div>

          <div style={{ width: '100px' }}>
            <div style={{ height: '6px', background: 'var(--bg-secondary)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{
                width: `${progress}%`, height: '100%',
                background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                borderRadius: '3px', transition: 'width 0.5s ease'
              }} />
            </div>
            <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', textAlign: 'right', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Progress
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}