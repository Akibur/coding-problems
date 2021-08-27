const vertices = ['a', 'b', 'c', 'd', 'e'];


const adj_list = [
    ['b', 'd'],
    ['a', 'c'],
    ['b', 'd', 'e'],
    ['a', 'c', 'e'],
    ['c', 'd']
];

const findAdj = (node) => {

    const vertex = vertices.indexOf(node);

    return adj_list[vertex];
};


const isConnected = (node1, node2) => {

    const vertex1 = vertices.indexOf(node1);

    return adj_list[vertex1].indexOf(node2) > -1 ? true : false;
};


console.log(isConnected('a', 'd'));

