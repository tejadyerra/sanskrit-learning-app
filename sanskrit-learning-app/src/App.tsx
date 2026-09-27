import { useState, useEffect, useCallback } from 'react';
import { vocabularyData, VocabularyItem, categories, levels } from './data/vocabulary';
import { Flashcard } from './components/Flashcard';
import { VocabularyList } from './components/VocabularyList';
import { ProgressStats } from './components/ProgressStats';
import { Header } from './components/Header';
import { TabNavigation } from './components/TabNavigation';
import { Toast } from './components/Toast';
import { Brain, BookOpen, Flame, Target, RotateCcw, Volume2, VolumeX } from 'lucide-react';

type ViewMode = 'flashcard' | 'list' | 'stats';
type Category = 'all' | 'word' | 'phrase' | 'sentence';
type Level = 'all' | 'beginner' | 'intermediate' | 'advanced';

interface AppState {
  currentView: ViewMode;
  selectedCategory: Category;
  selectedLevel: Level;
  currentIndex: number;
  flippedCards: Set<string>;
  masteredCards: Set<string>;
  studyDirection: 'sanskrit-to-telugu' | 'telugu-to-sanskrit';
  showIAST: boolean;
  audioEnabled: boolean;
  streak: number;
  lastStudyDate: string | null;
}

const STORAGE_KEY = 'sanskrit-learning-app-state';

const initialState: AppState = {
  currentView: 'flashcard',
  selectedCategory: 'all',
  selectedLevel: 'all',
  currentIndex: 0,
  flippedCards: new Set(),
  masteredCards: new Set(),
  studyDirection: 'sanskrit-to-telugu',
  showIAST: true,
  audioEnabled: true,
  streak: 0,
  lastStudyDate: null,
};

function getFilteredItems(state: AppState): VocabularyItem[] {
  return vocabularyData.filter(item => {
    const categoryMatch = state.selectedCategory === 'all' || item.category === state.selectedCategory;
    const levelMatch = state.selectedLevel === 'all' || item.level === state.selectedLevel;
    return categoryMatch && levelMatch;
  });
}

function getTodaysDate(): string {
  return new Date().toISOString().split('T')[0];
}

function calculateStreak(lastDate: string | null): number {
  if (!lastDate) return 0;
  const last = new Date(lastDate);
  const today = new Date(getTodaysDate());
  const diffDays = Math.floor((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays === 1 ? 1 : (diffDays === 0 ? 0 : -1); // -1 means broken streak
}

export function App() {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...initialState,
          ...parsed,
          flippedCards: new Set(parsed.flippedCards || []),
          masteredCards: new Set(parsed.masteredCards || []),
        };
      } catch {
        return initialState;
      }
    }
    return initialState;
  });

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const filteredItems = getFilteredItems(state);
  const currentItem = filteredItems[state.currentIndex];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...state,
      flippedCards: Array.from(state.flippedCards),
      masteredCards: Array.from(state.masteredCards),
    }));
  }, [state]);

  useEffect(() => {
    const today = getTodaysDate();
    if (state.lastStudyDate !== today) {
      const streakChange = calculateStreak(state.lastStudyDate);
      if (streakChange === 1) {
        setState(prev => ({ ...prev, streak: prev.streak + 1, lastStudyDate: today }));
      } else if (streakChange === -1) {
        setState(prev => ({ ...prev, streak: 1, lastStudyDate: today }));
      } else if (streakChange === 0 && state.lastStudyDate === null) {
        setState(prev => ({ ...prev, streak: 1, lastStudyDate: today }));
      }
    }
  }, []);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const nextCard = useCallback(() => {
    if (filteredItems.length === 0) return;
    setState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % filteredItems.length,
      flippedCards: new Set(),
    }));
  }, [filteredItems.length]);

  const prevCard = useCallback(() => {
    if (filteredItems.length === 0) return;
    setState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + filteredItems.length) % filteredItems.length,
      flippedCards: new Set(),
    }));
  }, [filteredItems.length]);

  const flipCard = useCallback((id: string) => {
    setState(prev => {
      const newFlipped = new Set(prev.flippedCards);
      newFlipped.add(id);
      return { ...prev, flippedCards: newFlipped };
    });
  }, []);

  const markMastered = useCallback((id: string) => {
    setState(prev => {
      const newMastered = new Set(prev.masteredCards);
      newMastered.add(id);
      return { ...prev, masteredCards: newMastered };
    });
    showToast('Marked as mastered! 🎉', 'success');
  }, [showToast]);

  const resetProgress = useCallback(() => {
    setState(prev => ({ ...prev, flippedCards: new Set(), masteredCards: new Set(), currentIndex: 0 }));
    showToast('Progress reset', 'success');
  }, [showToast]);

  const shuffleCards = useCallback(() => {
    setState(prev => ({ ...prev, currentIndex: Math.floor(Math.random() * filteredItems.length), flippedCards: new Set() }));
  }, [filteredItems.length]);

  const speakText = useCallback((text: string, lang: 'sa' | 'te' = 'sa') => {
    if (!state.audioEnabled || !('speechSynthesis' in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'sa' ? 'hi-IN' : 'te-IN';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }, [state.audioEnabled]);

  const getProgressPercent = () => {
    if (filteredItems.length === 0) return 0;
    return Math.round((state.masteredCards.size / filteredItems.length) * 100);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        streak={state.streak}
        progress={getProgressPercent()}
        masteredCount={state.masteredCards.size}
        totalCount={filteredItems.length}
      />

      <main style={{ flex: 1, padding: '1.5rem 0' }}>
        <div className="container">
          <TabNavigation
            currentView={state.currentView}
            onViewChange={(view) => setState(prev => ({ ...prev, currentView: view, flippedCards: new Set() }))}
          />

          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`tab-btn ${state.selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setState(prev => ({ ...prev, selectedCategory: cat.id as Category, currentIndex: 0, flippedCards: new Set() }))}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
              <select
                value={state.selectedLevel}
                onChange={(e) => setState(prev => ({ ...prev, selectedLevel: e.target.value as Level, currentIndex: 0, flippedCards: new Set() }))}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                {levels.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
              </select>
            </div>
          </div>

          {state.currentView === 'flashcard' && (
            <div style={{ marginTop: '1.5rem' }}>
              {currentItem ? (
                <Flashcard
                  item={currentItem}
                  isFlipped={state.flippedCards.has(currentItem.id)}
                  direction={state.studyDirection}
                  showIAST={state.showIAST}
                  onFlip={() => flipCard(currentItem.id)}
                  onMaster={() => markMastered(currentItem.id)}
                  onSpeak={speakText}
                  audioEnabled={state.audioEnabled}
                  index={state.currentIndex + 1}
                  total={filteredItems.length}
                />
              ) : (
                <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-muted)' }}>No items match your filters</p>
                </div>
              )}

              {filteredItems.length > 0 && (
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button className="btn btn-secondary" onClick={prevCard} disabled={filteredItems.length <= 1}>
                    <RotateCcw size={18} /> Previous
                  </button>
                  <button className="btn btn-secondary" onClick={shuffleCards}>
                    Shuffle
                  </button>
                  <button className="btn btn-primary" onClick={nextCard} disabled={filteredItems.length <= 1}>
                    Next <RotateCcw size={18} style={{ transform: 'rotate(180deg)' }} />
                  </button>
                </div>
              )}

              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <input
                    type="checkbox"
                    checked={state.showIAST}
                    onChange={(e) => setState(prev => ({ ...prev, showIAST: e.target.checked }))}
                    style={{ accentColor: 'var(--accent-primary)' }}
                  />
                  Show IAST
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <input
                    type="checkbox"
                    checked={state.studyDirection === 'telugu-to-sanskrit'}
                    onChange={(e) => setState(prev => ({ ...prev, studyDirection: e.target.checked ? 'telugu-to-sanskrit' : 'sanskrit-to-telugu', flippedCards: new Set() }))}
                    style={{ accentColor: 'var(--accent-primary)' }}
                  />
                  Telugu → Sanskrit
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <input
                    type="checkbox"
                    checked={state.audioEnabled}
                    onChange={(e) => setState(prev => ({ ...prev, audioEnabled: e.target.checked }))}
                    style={{ accentColor: 'var(--accent-primary)' }}
                  />
                  {state.audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />} Audio
                </label>
              </div>
            </div>
          )}

          {state.currentView === 'list' && (
            <VocabularyList
              items={filteredItems}
              masteredCards={state.masteredCards}
              flippedCards={state.flippedCards}
              direction={state.studyDirection}
              showIAST={state.showIAST}
              onFlip={flipCard}
              onMaster={markMastered}
              onSpeak={speakText}
              audioEnabled={state.audioEnabled}
            />
          )}

          {state.currentView === 'stats' && (
            <ProgressStats
              totalItems={vocabularyData.length}
              masteredItems={state.masteredCards.size}
              streak={state.streak}
              categoryStats={categories.slice(1).map(cat => ({
                category: cat.id,
                label: cat.label,
                total: vocabularyData.filter(i => i.category === cat.id).length,
                mastered: Array.from(state.masteredCards).filter(id => vocabularyData.find(v => v.id === id)?.category === cat.id).length,
              }))}
              levelStats={levels.slice(1).map(l => ({
                level: l.id,
                label: l.label,
                total: vocabularyData.filter(i => i.level === l.id).length,
                mastered: Array.from(state.masteredCards).filter(id => vocabularyData.find(v => v.id === id)?.level === l.id).length,
              }))}
              onReset={resetProgress}
            />
          )}
        </div>
      </main>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}