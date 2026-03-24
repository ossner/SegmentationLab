import React, { useRef, useEffect, useState, useCallback } from 'react';
import type { DrawMode } from './types';

interface GridCanvasProps {
    gridSize: number;
    canvasSize: number;
    drawMode: DrawMode;
    brushSize: number;
    clearTrigger: number;
    onUpdate: (gt: boolean[], pred: boolean[]) => void;
}

export const GridCanvas: React.FC<GridCanvasProps> = ({
    gridSize,
    canvasSize,
    drawMode,
    brushSize,
    clearTrigger,
    onUpdate,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const gtRef = useRef<boolean[]>(new Array(gridSize * gridSize).fill(false));
    const predRef = useRef<boolean[]>(new Array(gridSize * gridSize).fill(false));

    const drawCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const cellSize = canvasSize / gridSize;
        ctx.clearRect(0, 0, canvasSize, canvasSize);

        // Draw pixels
        for (let i = 0; i < gridSize * gridSize; i++) {
            const x = (i % gridSize) * cellSize;
            const y = Math.floor(i / gridSize) * cellSize;

            const isGt = gtRef.current[i];
            const isPred = predRef.current[i];

            if (isGt && isPred) {
                ctx.fillStyle = '#22c55e'; // Green (Intersection / TP)
            } else if (isGt) {
                ctx.fillStyle = '#3b82f6'; // Blue (Ground Truth / FN)
            } else if (isPred) {
                ctx.fillStyle = '#ef4444'; // Red (Prediction / FP)
            } else {
                ctx.fillStyle = '#f8fafc'; // Default empty
            }

            ctx.fillRect(x, y, cellSize, cellSize);

            if (gridSize <= 32) {
                ctx.strokeStyle = '#e2e8f0';
                ctx.strokeRect(x, y, cellSize, cellSize);
            }
        }
        if (hoverIndex !== null) {
            const hX = hoverIndex % gridSize;
            const hY = Math.floor(hoverIndex / gridSize);
            const offset = Math.floor(brushSize / 2);

            ctx.strokeStyle = '#aaaaaa';
            ctx.lineWidth = 2;
            ctx.strokeRect(
                (hX - offset) * cellSize,
                (hY - offset) * cellSize,
                brushSize * cellSize,
                brushSize * cellSize
            );
        }
    }, [gridSize, canvasSize, hoverIndex, brushSize]);

    useEffect(() => {
        gtRef.current = new Array(gridSize * gridSize).fill(false);
        predRef.current = new Array(gridSize * gridSize).fill(false);
        onUpdate(gtRef.current, predRef.current);
    }, [gridSize, clearTrigger]);

    useEffect(() => {
        drawCanvas();
    }, [drawCanvas, hoverIndex, brushSize, clearTrigger]);

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cellSize = canvasSize / gridSize;
        const gX = Math.floor(x / cellSize);
        const gY = Math.floor(y / cellSize);

        if (gX >= 0 && gX < gridSize && gY >= 0 && gY < gridSize) {
            const index = gY * gridSize + gX;
            setHoverIndex(index);
            if (isDrawing) applyBrush(gX, gY);
        } else {
            setHoverIndex(null);
        }
    };

    const applyBrush = (centerX: number, centerY: number) => {
        const offset = Math.floor(brushSize / 2);
        let changed = false;

        for (let dx = -offset; dx < brushSize - offset; dx++) {
            for (let dy = -offset; dy < brushSize - offset; dy++) {
                const nx = centerX + dx;
                const ny = centerY + dy;

                if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize) {
                    const index = ny * gridSize + nx;
                    if (drawMode === 'gt') { gtRef.current[index] = true; changed = true; }
                    else if (drawMode === 'pred') { predRef.current[index] = true; changed = true; }
                    else if (drawMode === 'erase') {
                        gtRef.current[index] = false;
                        predRef.current[index] = false;
                        changed = true;
                    }
                }
            }
        }
        if (changed) drawCanvas();
    };

    return (
        <canvas
            ref={canvasRef}
            width={canvasSize}
            height={canvasSize}
            style={{ cursor: 'none', border: '2px solid #cbd5e1', borderRadius: '4px', display: 'block' }}
            onMouseMove={handleMouseMove}
            onMouseDown={(e) => { setIsDrawing(true); handleMouseMove(e); }}
            onMouseUp={() => { setIsDrawing(false); onUpdate([...gtRef.current], [...predRef.current]); }}
            onMouseLeave={() => { setIsDrawing(false); setHoverIndex(null); }}
        />
    );
};