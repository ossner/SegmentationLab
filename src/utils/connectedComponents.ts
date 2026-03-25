export interface Instance {
    id: number;
    mask: boolean[];
    volume: number;
    centroid: [number, number];
    matched: boolean;
}

export const findInstances = (data: boolean[], gridSize: number, partnerData: boolean[] = []): Instance[] => {
    const visited = new Uint8Array(data.length);
    const instances: Instance[] = [];
    let idCounter = 1;

    for (let i = 0; i < data.length; i++) {
        if (data[i] && !visited[i]) {
            const instanceMask = new Array(data.length).fill(false);
            const queue = [i];
            visited[i] = 1;
            let volume = 0;
            let sumX = 0;
            let sumY = 0;
            let isMatched = false;

            while (queue.length > 0) {
                const curr = queue.shift()!;
                instanceMask[curr] = true;
                volume++;

                const x = curr % gridSize;
                const y = Math.floor(curr / gridSize);
                sumX += x;
                sumY += y;
                if (partnerData[curr]) isMatched = true;

                const neighbors = [
                    { nx: x + 1, ny: y },     // Right
                    { nx: x - 1, ny: y },     // Left
                    { nx: x, ny: y + 1 }, // Down
                    { nx: x, ny: y - 1 }, // Up
                    { nx: x + 1, ny: y + 1 }, // Bottom-Right (Diag)
                    { nx: x - 1, ny: y - 1 }, // Top-Left (Diag)
                    { nx: x + 1, ny: y - 1 }, // Top-Right (Diag)
                    { nx: x - 1, ny: y + 1 }  // Bottom-Left (Diag)
                ];

                for (const { nx, ny } of neighbors) {
                    const nIdx = ny * gridSize + nx;
                    if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize && data[nIdx] && !visited[nIdx]) {
                        visited[nIdx] = 1;
                        queue.push(nIdx);
                    }
                }
            }

            instances.push({
                id: idCounter++,
                mask: instanceMask,
                volume,
                centroid: [Number((sumX / volume).toFixed(2)), Number((sumY / volume).toFixed(2))],
                matched: isMatched
            });
        }
    }
    return instances;
};