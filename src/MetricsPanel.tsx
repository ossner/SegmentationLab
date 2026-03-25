import React, { useState } from 'react';
import {
    SEGMENTATION_METRICS
} from './metrics';
import { MetricItem } from './MetricItem';

interface MetricsPanelProps {
    gt: boolean[];
    pred: boolean[];
    onShowInfo: (id: string) => void;
}

export const MetricsPanel: React.FC<MetricsPanelProps> = ({ gt, pred, onShowInfo }) => {
    const [pinnedIds, setPinnedIds] = useState<Set<string>>(new Set(['dice', 'iou']));

    const togglePin = (id: string) => {
        setPinnedIds(prev => {
            const newPinned = new Set(prev);
            if (newPinned.has(id)) {
                newPinned.delete(id);
            } else {
                newPinned.add(id);
            }
            return newPinned;
        });
    };

    const data = { gt, pred };
    const pinnedMetrics = SEGMENTATION_METRICS.filter(m => pinnedIds.has(m.id));
    const unpinnedMetrics = SEGMENTATION_METRICS.filter(m => !pinnedIds.has(m.id));

    const renderItem = (metric: any, pinned: boolean) => (
        <MetricItem
            key={metric.id}
            metric={metric}
            data={data}
            isPinned={pinned}
            onTogglePin={togglePin}
            onShowInfo={onShowInfo}
        />
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 style={{ margin: '0rem', marginBottom: '1rem', fontSize: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>Metrics</h3>
            <div style={{ flex: 1, overflowY: 'auto' }}>
                {pinnedMetrics.map(m => renderItem(m, true))}
                <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '1rem 0' }} />
                {unpinnedMetrics.map(m => renderItem(m, false))}
            </div>
        </div>
    );
};