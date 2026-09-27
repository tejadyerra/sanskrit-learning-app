import { useState, useEffect } from 'react';
import { Volume2, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { VocabularyItem } from '../data/vocabulary';

interface FlashcardProps {
  item: VocabularyItem;
  isFlipped: boolean;
  direction: 'sanskrit-to-telugu' | 'telugu-to-sanskrit';
  showIAST: boolean;
  onFlip: () => void;
  onMaster: () => void;
  onSpeak: (text: string, lang?: 'sa' | 'te') => void;
  audioEnabled: boolean;
  index: number;
  total: number;
}

export function Flashcard({
  item,
  isFlipped,
  direction,
  showIAST,
  onFlip,
  onMaster,
  onSpeak,
  audioEnabled,
  index,
  total,
}: FlashcardProps) {
  const [hovered, setHovered] = useState(false);
  const [masteredAnimation, setMasteredAnimation] = useState(false);

  const frontText = direction === 'sanskrit-to-telugu' ? item.sanskrit : item.telugu;
  const backText = direction === 'sanskrit-to-telugu' ? item.telugu : item.sanskrit;
  const frontLabel = direction === 'sanskrit-to-telugu' ? 'Sanskrit' : 'Telugu';
  const backLabel = direction === 'sanskrit-to-telugu' ? 'Telugu Meaning' : 'Sanskrit';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onFlip();
    }
    if (e.key === 'ArrowRight') onMaster();
    if (e.key === 'ArrowLeft') onFlip();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        onFlip();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onFlip]);

  return (
    <div
      className="flashcard"
      onClick={onFlip}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Flashcard ${index} of ${total}. ${isFlipped ? 'Showing answer' : 'Showing question'}. Click or press Space to flip.`}
      style={{ opacity: masteredAnimation ? 0.5 : 1, transform: masteredAnimation ? 'scale(0.95)' : 'none' }}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '1.5rem', opacity: hovered ? 1 : 0.6, transition: 'opacity 0.2s' }}>
            <span className="badge badge-{item.level}">{item.level}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {frontLabel} · {item.category}
            </span>
          </div>

          <div className="sanskrit-text" style={{ fontSize: '2.5rem', marginBottom: '1rem', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {frontText}
          </div>

          {showIAST && item.iast && direction === 'sanskrit-to-telugu' && (
            <div className="ia-text" style={{ fontSize: '1.125rem', marginBottom: '1.5rem', minHeight: '32px' }}>
              {item.iast}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: 'auto' }}>
            {audioEnabled && (
              <button
                onClick={(e) => { e.stopPropagation(); onSpeak(frontText, direction === 'sanskrit-to-telugu' ? 'sa' : 'te'); }}
                className="btn btn-ghost"
                style={{ width: '44px', height: '44px', borderRadius: '50%' }}
                aria-label="Play pronunciation"
              >
                <Volume2 size={20} />
              </button>
            )}
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Click or press Space to reveal
            </div>
          </div>
        </div>

        <div className="flashcard-back">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '1.5rem' }}>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>{item.level}</span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
              {backLabel}
            </span>
          </div>

          <div style={{ fontFamily: direction === 'sanskrit-to-telugu' ? "'Noto Sans Telugu', sans-serif" : "'Noto Sans Devanagari', sans-serif", fontSize: direction === 'sanskrit-to-telugu' ? '1.75rem' : '2.5rem', marginBottom: '1rem', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1.6 }}>
            {backText}
          </div>

          {showIAST && item.iast && direction === 'sanskrit-to-telugu' && (
            <div style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', marginBottom: '1rem', minHeight: '32px' }}>
              {item.iast}
            </div>
          )}

          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '1.5rem', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 1rem' }}>
            {item.english}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            {audioEnabled && (
              <button
                onClick={(e) => { e.stopPropagation(); onSpeak(backText, direction === 'sanskrit-to-telugu' ? 'te' : 'sa'); }}
                className="btn btn-ghost"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.3)', width: '44px', height: '44px', borderRadius: '50%' }}
                aria-label="Play pronunciation"
              >
                <Volume2 size={20} />
              </button>
            )}
            <button
              onClick={(e) => { e.stopPropagation(); onMaster(); setMasteredAnimation(true); setTimeout(() => setMasteredAnimation(false), 300); }}
              className="btn"
              style={{ background: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
            >
              <CheckCircle2 size={18} /> Mastered
            </button>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '-2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem' }}>
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: i === index - 1 ? 'var(--accent-primary)' : 'var(--border)',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}