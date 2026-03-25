import React from 'react';
import type { Instance } from './utils/connectedcomponents';

interface InstanceTableProps {
    instances: Instance[];
    onHoverInstance: (mask: boolean[]) => void;
}

export const InstanceTable: React.FC<InstanceTableProps> = ({ instances, onHoverInstance }) => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', height: '100%',
            backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0',
            overflow: 'hidden'
        }}>
            <div style={{ padding: '0.5rem', paddingBottom: '-1rem', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                <h1 style={{ margin: '0rem', fontSize: '1rem' }}>GT Instance Manifest</h1>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.85rem' }}>
                    <thead style={{ position: 'sticky', top: 0, background: '#f1f5f9', zIndex: 1 }}>
                        <tr>
                            <th style={{ padding: '6px' }}>ID</th>
                            <th>Vol (px)</th>
                            <th>Centroid</th>
                            <th>Matched</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instances.length === 0 ? (
                            <tr><td colSpan={4} style={{ padding: '20px', textAlign: 'center', color: '#94a3b8' }}>No objects detected</td></tr>
                        ) : (
                            instances.map((inst) => (
                                <tr
                                    key={inst.id}
                                    onMouseEnter={() => onHoverInstance(inst.mask)}
                                    onMouseLeave={() => onHoverInstance([])}
                                    style={{ borderBottom: '1px solid #f1f5f9', cursor: 'help' }}
                                    className="hover-row"
                                >
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>#{inst.id}</td>
                                    <td>{inst.volume}</td>
                                    <td>({inst.centroid[0]}, {inst.centroid[1]})</td>
                                    <td style={{ textAlign: 'center' }}>
                                        {inst.matched ?
                                            <span style={{ color: '#22c55e' }}>✔</span> :
                                            <span style={{ color: '#ef4444' }}>✘</span>
                                        }
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};