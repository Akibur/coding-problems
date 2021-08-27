const vertices = ['A', 'B', 'C', 'D', 'E'];

const vertexIdx = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
};

const adjMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]
];

//Find adjacent nodes
const findAdj = (node) => {
    const adjacentNodes = [];
    let row = adjMatrix[vertexIdx[node]];

    for (let i = 0; i < row.length; i++) {
        if (row[i] == 1) {
            adjacentNodes.push(vertices[i]);
        }
    }

    return adjacentNodes;
};

const isConnected = (node1, node2) => {
    let indexNode1 = vertexIdx[node1];
    let indexNode2 = vertexIdx[node2];

    return !!adjMatrix[indexNode1][indexNode2];

};


console.log(isConnected('B', 'A'));