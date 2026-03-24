import React from 'react';

export const MetricItem: React.FC<{
    metric: any;
    data: any;
    isPinned: boolean;
    onTogglePin: (id: string) => void;
    onShowInfo: (id: string) => void;
}> = ({ metric, data, isPinned, onTogglePin, onShowInfo }) => {
    const value = data.gt.length > 0 ? metric.calculate(data) : 0;
    const formattedValue = typeof value === 'number' ? value.toFixed(4) : value; return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            marginBottom: '0.5rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button onClick={() => onTogglePin(metric.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: isPinned ? '#eab308' : '#cbd5e1' }}>
                    {isPinned ? '★' : '☆'}
                </button>
                <span style={{ fontWeight: 500 }}>{metric.name}</span>

                {/* Info Button */}
                <button
                    onClick={() => onShowInfo(metric.id)}
                    style={{
                        background: '#e2e8f0', border: 'none', borderRadius: '50%',
                        width: '18px', height: '18px', fontSize: '11px', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#475569', fontWeight: 'bold'
                    }}
                    title="View Formula & Details"
                >
                    i
                </button>
            </div>
            <span style={{ fontFamily: 'monospace' }}>{formattedValue}</span>    </div>
    );
};