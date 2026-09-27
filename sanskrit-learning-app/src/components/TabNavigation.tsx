import { Layers, List, BarChart2 } from 'lucide-react';

type ViewMode = 'flashcard' | 'list' | 'stats';

interface TabNavigationProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export function TabNavigation({ currentView, onViewChange }: TabNavigationProps) {
  const tabs = [
    { id: 'flashcard', label: 'Flashcards', icon: Layers, desc: 'Learn with spaced repetition' },
    { id: 'list', label: 'Vocabulary', icon: List, desc: 'Browse all words & phrases' },
    { id: 'stats', label: 'Progress', icon: BarChart2, desc: 'Track your learning stats' },
  ] as const;

  return (
    <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--bg-secondary)', padding: '0.5rem', borderRadius: 'var(--radius-lg)' }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onViewChange(tab.id as ViewMode)}
          className={`tab-btn ${currentView === tab.id ? 'active' : ''}`}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.625rem 1rem', minWidth: '0'
          }}
          title={tab.desc}
        >
          <tab.icon size={18} style={{ flexShrink: 0 }} />
          <span style={{ whiteSpace: 'nowrap' }}>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}