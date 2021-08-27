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
}

