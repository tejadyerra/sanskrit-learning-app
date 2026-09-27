import { useState } from 'react';
import { Volume2, CheckCircle2, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import { VocabularyItem } from '../data/vocabulary';

interface VocabularyListProps {
  items: VocabularyItem[];
  masteredCards: Set<string>;
  flippedCards: Set<string>;
  direction: 'sanskrit-to-telugu' | 'telugu-to-sanskrit';
  showIAST: boolean;
  onFlip: (id: string) => void;
  onMaster: (id: string) => void;
  onSpeak: (text: string, lang?: 'sa' | 'te') => void;
  audioEnabled: boolean;
}

export function VocabularyList({
  items,
  masteredCards,
  flippedCards,
  direction,
  showIAST,
  onFlip,
  onMaster,
  onSpeak,
  audioEnabled,
}: VocabularyListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const filteredItems = items.filter(item => {
    const query = searchQuery.toLowerCase();
    return (
      item.sanskrit.toLowerCase().includes(query) ||
      item.iast.toLowerCase().includes(query) ||
      item.telugu.toLowerCase().includes(query) ||
      item.english.toLowerCase().includes(query)
    );
  });

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    onFlip(id);
  };

  const isExpanded = (id: string) => expandedItems.has(id) || flippedCards.has(id);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'word': return 'var(--success)';
      case 'phrase': return 'var(--accent-primary)';
      case 'sentence': return '#6366f1';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search Sanskrit, Telugu, English, or IAST..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem',
              borderRadius: 'var(--radius-md)', border: '1px solid var(--border)',
              background: 'var(--bg-card)', fontSize: '0.9375rem',
              outline: 'none'
            }}
          />
        </div>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          <Filter size={16} /> {filteredItems.length} of {items.length} items
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {filteredItems.map(item => {
          const isMastered = masteredCards.has(item.id);
          const isFlipped = isExpanded(item.id);
          const frontText = direction === 'sanskrit-to-telugu' ? item.sanskrit : item.telugu;
          const backText = direction === 'sanskrit-to-telugu' ? item.telugu : item.sanskrit;
          const frontLabel = direction === 'sanskrit-to-telugu' ? 'Sanskrit' : 'Telugu';
          const backLabel = direction === 'sanskrit-to-telugu' ? 'Telugu' : 'Sanskrit';

          return (
            <div
              key={item.id}
              className="card"
              style={{
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                background: isMastered ? 'var(--success-light)' : 'var(--bg-card)',
                borderLeft: isMastered ? '4px solid var(--success)' : '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.25rem', cursor: 'pointer',
                  background: isFlipped ? 'var(--accent-light)' : 'transparent'
                }}
                onClick={() => toggleExpand(item.id)}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <span
                      className="badge"
                      style={{
                        background: `${getCategoryColor(item.category)}15`,
                        color: getCategoryColor(item.category),
                        fontSize: '0.625rem'
                      }}
                    >
                      {item.category}
                    </span>
                    <span className={`badge badge-${item.level}`} style={{ fontSize: '0.625rem' }}>
                      {item.level}
                    </span>
                    {item.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '0.625rem', color: 'var(--text-muted)',
                        padding: '0.125rem 0.5rem', background: 'var(--bg-secondary)',
                        borderRadius: '999px', textTransform: 'capitalize'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {frontLabel}
                      </span>
                      <span style={{ fontFamily: direction === 'sanskrit-to-telugu' ? "'Noto Sans Devanagari', sans-serif" : "'Noto Sans Telugu', sans-serif", fontSize: direction === 'sanskrit-to-telugu' ? '1.5rem' : '1.25rem', fontWeight: 500 }}>
                        {frontText}
                      </span>
                      {audioEnabled && (
                        <button
                          onClick={(e) => { e.stopPropagation(); onSpeak(frontText, direction === 'sanskrit-to-telugu' ? 'sa' : 'te'); }}
                          className="btn btn-ghost"
                          style={{ padding: '0.35rem', borderRadius: '50%' }}
                          aria-label="Play pronunciation"
                        >
                          <Volume2 size={16} />
                        </button>
                      )}
                    </div>

                    {showIAST && item.iast && direction === 'sanskrit-to-telugu' && (
                      <div className="ia-text" style={{ fontSize: '0.9375rem' }}>
                        {item.iast}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                  {isMastered ? (
                    <CheckCircle2 size={20} style={{ color: 'var(--success)' }} />
                  ) : (
                    <button
                      onClick={(e) => { e.stopPropagation(); onMaster(item.id); }}
                      className="btn btn-ghost"
                      style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}
                    >
                      <CheckCircle2 size={18} />
                    </button>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleExpand(item.id); }}
                    className="btn btn-ghost"
                    style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}
                  >
                    {isFlipped ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
              </div>

              {isFlipped && (
                <div style={{
                  padding: '0 1.25rem 1.25rem',
                  borderTop: '1px solid var(--border)',
                  background: 'var(--accent-light)',
                  animation: 'slideDown 0.2s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {backLabel}
                        </span>
                        <span style={{ fontFamily: direction === 'sanskrit-to-telugu' ? "'Noto Sans Telugu', sans-serif" : "'Noto Sans Devanagari', sans-serif", fontSize: direction === 'sanskrit-to-telugu' ? '1.35rem' : '1.5rem', fontWeight: 500 }}>
                          {backText}
                        </span>
                        {audioEnabled && (
                          <button
                            onClick={(e) => { e.stopPropagation(); onSpeak(backText, direction === 'sanskrit-to-telugu' ? 'te' : 'sa'); }}
                            className="btn btn-ghost"
                            style={{ padding: '0.35rem', borderRadius: '50%' }}
                            aria-label="Play pronunciation"
                          >
                            <Volume2 size={16} />
                          </button>
                        )}
                      </div>

                      {showIAST && item.iast && direction === 'sanskrit-to-telugu' && (
                        <div className="ia-text" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                          {item.iast}
                        </div>
                      )}

                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                        {item.english}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>No items match your search</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}