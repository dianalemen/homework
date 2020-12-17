var Graph = /** @class */ (function () {
    function Graph(amountOfVertices) {
        this.vertices = [];
        this.addVertices(amountOfVertices);
    }
    Graph.prototype.addVertices = function (amountOfVertices) {
        for (var i = 0; i < amountOfVertices; i++) {
            this.vertices.push([]);
        }
    };
    Graph.prototype.addEdge = function (start, end) {
        for (var i = 0; i < end; i++) {
            this.vertices[start][i] = this.vertices[start][i] || 0;
        }
        this.vertices[start][end] = 1;
    };
    Graph.prototype.buildMatrix = function () {
        this.matrix = [];
        var maxEdgesLength = 0;
        this.vertices.forEach(function (element) {
            if (element.length > maxEdgesLength) {
                maxEdgesLength = element.length;
            }
        });
        for (var index = 0; index < this.vertices.length; index++) {
            if (this.vertices[index].length < maxEdgesLength) {
                var diff = maxEdgesLength - this.vertices[index].length;
                this.vertices[index] = this.vertices[index].concat(Array(diff).fill(0));
            }
            this.matrix[index] = this.vertices[index];
        }
    };
    Graph.prototype.getMatrix = function () {
        return this.matrix;
    };
    Graph.prototype.getMatrixLength = function () {
        return this.matrix.length;
    };
    return Graph;
}());
var graph = new Graph(6);
graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.buildMatrix();
console.log(graph.getMatrix());
var culcShortestDistance = function (graph, startVertex, endVertex) {
    var lengthOfVertices = graph.getMatrixLength();
    var visited = new Array(lengthOfVertices);
    visited[startVertex] = true;
    var pathLengths = new Array(lengthOfVertices);
    var prevVertices = new Array(lengthOfVertices);
    for (var i = 0; i < lengthOfVertices; i++) {
        pathLengths[i] = graph.getMatrix()[startVertex][i] || Number.MAX_SAFE_INTEGER;
        if (pathLengths[i] !== Number.MAX_SAFE_INTEGER) {
            prevVertices[i] = startVertex;
        }
    }
    pathLengths[startVertex] = 0;
    for (var i = 0; i < lengthOfVertices - 1; i++) {
        var closestVertex = -1;
        var closestDistance = Number.MAX_SAFE_INTEGER;
        for (var j_1 = 0; j_1 < lengthOfVertices; j_1++) {
            if (!visited[j_1] && (pathLengths[j_1] < closestDistance)) {
                closestDistance = pathLengths[j_1];
                closestVertex = j_1;
            }
        }
        visited[closestVertex] = true;
        for (var j = 0; j < lengthOfVertices; j++) {
            if (!visited[j]) {
                var possiblyCloserDistance = pathLengths[closestVertex] + graph.getMatrix()[startVertex][closestVertex];
                if (possiblyCloserDistance < pathLengths[j]) {
                    pathLengths[j] = possiblyCloserDistance;
                    prevVertices[j] = closestVertex;
                }
            }
        }
    }
    var path = [];
    while (endVertex != startVertex) {
        path.unshift(endVertex);
        endVertex = prevVertices[endVertex];
    }
    console.log(path);
};
culcShortestDistance(graph, 1, 4);
