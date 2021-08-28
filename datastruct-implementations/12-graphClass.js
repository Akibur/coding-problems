class Node {
    constructor(val) {
        this.val = val;
        this.edgeList = [];
    }

    connect(node) {
        this.edgeList.push(node);
        node.edgeList.push(this);
    }

    getAdjNodes() {
        return this.edgeList.map((e) => {
            this.val;
        });
    }

    isConnected(node) {
        return this.edgeList.map((edge) => {
            edge.val;
        }).indexOf(node.val) > -1;

    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes];
    }

    BFS(start, end = {}) {
        let queue = [start];
        const visitedNodes = new Set();
        visitedNodes.add(start);

        while (queue.length > 0) {
            const node = queue.shift();

            if (node.val === end.val) {
                console.log("found it");
            }
            for (const edge of node.edgeList) {
                if (!visitedNodes.has(edge)) {
                    queue.push(edge);
                    visitedNodes.add(edge);
                }
            }
            console.log(node.val);
        }

    }

    DFS(start, end, visited) {
        if (!visited) {
            visited = new Set();
        }

        if (start.val === end.val) {
            console.log("found it");
            return;
        }

        visited.add(start);
        for (const adjacency of start.edgeList) {
            if (!visited.has(adjacency)) {
                this.DFS(adjacency, end, visited);

            }

        }

    }

    reconstructPath(visitedNodes, start, end) {
        let currNode = endNode;

        const shorestPath = [];
        while (currNode !== null) {
            shorestPath.push(currNode);
            currNode = visitedNodes[currNode.val];
        }
        return shorestPath.reverse;
    }

    BfsShortestPath(start, end) {
        let queue = [start];
        const visitedNodes = {};
        visitedNodes[start.val] = null;

        while (queue.length > 0) {
            const node = queue.shift();

            if (node.val === end.val) {
                return this.reconstructPath(visitedNodes, start, end);
            }
            for (const edge of node.edgeList) {
                if (!visitedNodes.hasOwnProperty(edge.val)) {
                    queue.push(edge);
                    visitedNodes[edge.val] = node;
                }
            }
            console.log(node.val);
        }
    }
}

