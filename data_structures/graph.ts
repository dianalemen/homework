class Graph {
  constructor(amountOfVertices) {
    this.vertices = [];
    this.addVertices(amountOfVertices);
  }

  addVertices(amountOfVertices) {
    for (let i = 0; i < amountOfVertices; i++) {
      this.vertices.push([]);
    }
  }

  addEdge(start, end) {
    for(let i = 0; i < end; i++) {
      this.vertices[start][i] = this.vertices[start][i] || Number.MAX_SAFE_INTEGER;
    }
    this.vertices[start][end] = 1;
  }

  buildMatrix() {
    this.matrix = [];
    let maxEdgesLength = 0;
    this.vertices.forEach(element => {
      if (element.length > maxEdgesLength) {
        maxEdgesLength = element.length;
      }
    });

    for (let index = 0; index < this.vertices.length; index++) {
      if (this.vertices[index].length < maxEdgesLength) {
        const diff = maxEdgesLength - this.vertices[index].length;
        this.vertices[index] = this.vertices[index].concat(Array(diff).fill(Number.MAX_SAFE_INTEGER));
      }

      this.matrix[index] = this.vertices[index];
    }
  }

  getMatrix() {
    return this.matrix;
  }

  getMatrixLength() {
    return this.matrix.length;
  }
}

const graph = new Graph(6);

graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

graph.buildMatrix();

const culcShortestDistance = (graph, startVertex, endVertex) => {
  const lengthOfVertices = graph.getMatrixLength();
  const visited = new Array(lengthOfVertices);
  visited[startVertex] = true;
  const pathLengths = new Array(lengthOfVertices);
  const prevVertices = new Array(lengthOfVertices);

  for (let i = 0; i < lengthOfVertices; i++) {
    pathLengths[i] = graph.getMatrix()[startVertex][i];
    if (pathLengths[i] !== Number.MAX_SAFE_INTEGER) {
      prevVertices[i] = startVertex;
    }
  }

  pathLengths[startVertex] = 0;

  for (let i = 0; i < lengthOfVertices - 1; i++) {
    let closestVertex = -1;
    let closestDistance = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < lengthOfVertices; j++) {
      if (!visited[j] && (pathLengths[j] < closestDistance)) {
        closestDistance = pathLengths[j];
        closestVertex = j;
      }
    }
    visited[closestVertex] = true;

    for (var j = 0; j < lengthOfVertices; j++) {
      if (!visited[j]) {
        var possiblyCloserDistance = pathLengths[closestVertex] + graph.getMatrix()[startVertex][closestVertex];
        if (possiblyCloserDistance < pathLengths[j]) {
          pathLengths[j] = possiblyCloserDistance;
          console.log(j, closestVertex)
          prevVertices[j] = closestVertex;
        }
      }
    }
  }

  const path = [];
  while (endVertex != startVertex) {
    path.unshift(endVertex);
    endVertex = prevVertices[endVertex];
  }
}

culcShortestDistance(graph, 1, 4);
