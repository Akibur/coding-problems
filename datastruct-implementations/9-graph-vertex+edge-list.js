const vertices = ['A', 'B', 'C', 'D', 'E'];

const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E'],
];

// Find adjacent nodes 
function findAdjacentNodes(node) {
    let adjNodes = [];

    for (const edge of edges) {
        const nodeIdx = edge.indexOf(node);
        if (nodeIdx > -1) {
            let adjNode = nodeIdx === 0 ? edge[1] : edge[0];
            adjNodes.push(adjNode);
        }
    }
    // for (let i = 0; i < edges.length; i++) {
    //     if (edges[i][0] == node || edges[i][1] == node) {
    //         adj.push(edges[i]);

    //     }
    // }

    return adjNodes;
};


//isConnected
const isConnected = function isConnected(node1, node2) {
    return edges.some((edge) => {
        return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;

    });
};



console.log(findAdjacentNodes('C'));;
