function Graph() {
  adjList = {};
  return {
    addVertex(vertex) {
      if (!adjList[vertex]) {
        //creating a adj list with key = vertex and the list adj vertex empty to begin with
        adjList[vertex] = new Set();
        // console.log(adjList[vertex]);
      }
    },
    Edge(vertex1, vertex2) {
      if (!adjList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!adjList[vertex2]) {
        this.addVertex(vertex2);
      }
      adjList[vertex1].add(vertex2);
      adjList[vertex2].add(vertex1);
    },
    Display() {
      for (let vertex in adjList) {
        console.log(vertex + "=>" + [...adjList[vertex]]);
      }
    },
    hasEdge(vertex1, vertex2) {
      return adjList[vertex1].has(vertex2) && adjList[vertex2].has(vertex1);
    },
    EdgeRemove(vertex1, vertex2) {
      adjList[vertex1].delete(vertex2);
      adjList[vertex2].delete(vertex1);
    },
    //time complexity depends on adjacent vertex and all other have o(1)
    removeVertex(vertex) {
      if (!adjList[vertex]) {
        return;
      }
      for (let adjacentVertex of adjList[vertex]) {
        this.EdgeRemove(vertex, adjacentVertex);
      }
      delete adjList[vertex];
    },
  };
}
const graph = Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.Edge("A", "B");
graph.Edge("B", "C");

graph.Display();
console.log(graph.hasEdge("A", "C"));
graph.EdgeRemove("A", "B");
graph.removeVertex("B")
graph.Display();
