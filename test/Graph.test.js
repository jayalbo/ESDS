import { Graph } from "../lib/Graph.mjs";

// const graph = new Graph(); // Creates a new undirected graph

// // Add Nodes (Users)
// graph.addNode(1, "Randall");
// graph.addNode(2, "Mellisa");
// graph.addNode(3, "Cecelia");
// graph.addNode(4, "Velda");
// graph.addNode(5, "Rossie");

// //Add Edges (Friendships)
// graph.addEdge(1, 2); // Randall - Mellisa
// graph.addEdge(2, 5); // Mellisa - Rossie
// graph.addEdge(3, 4); // Cecelia - Velda
// graph.addEdge(4, 1); // Velda - Randall
// graph.addEdge(5, 1); // Rossie - Randall

// // Check if connection exists (Users are friends)
// console.log(graph.nodesConnected(2, 3)); // Mellisa & Cecelia: Output: false
// console.log(graph.nodesConnected(1, 5)); // Randall & Rossie: Output: true

// // Check distance between two nodes (Users)
// console.log(graph.getWeight(2, 3)); // Mellisa & Cecelia: Output: 3rd level friends
// console.log(graph.getWeight(1, 5)); // Randall & Rossie: Output: 1st level friends (Users are friends)

// // Get Path between nodes (Friendship relation between two users)
// console.log(graph.getPath(2, 3).map((value) => graph.getNode(value.node)));
// //  [ 'Mellisa', 'Randall', 'Velda', 'Cecelia' ]
// console.log(graph.getPath(1, 5).map((value) => graph.getNode(value.node)));
// //  [ 'Randall', 'Rossie' ]

const graph = new Graph(true); // Creates a new directed graph

// Add Nodes (Cities)
graph.addNode(1, "City Α");
graph.addNode(2, "City β");
graph.addNode(3, "City Γ");
graph.addNode(4, "City Δ");
graph.addNode(5, "City ε");

// Add Edges (Routes between cities (one-way))
graph.addEdge(1, 3, 75); // Alpha (Α) -> Gamma (Γ), distance 75 miles
graph.addEdge(2, 5, 325); // Beta (β) -> Epsilon (ε), distance 325 miles
graph.addEdge(3, 1, 125); //  Gamma (Γ) -> Alpha (α), distance 125 miles
graph.addEdge(4, 2, 100); // Delta (Δ) -> Beta (β), distance 100 miles
graph.addEdge(5, 1, 415); // Epsilon (ε) -> Alpha (Α), distance 415 miles
graph.addEdge(5, 3, 550); // Epsilon (ε) -> Gamma (Γ), distance 550 miles

// Check if connection exists (Route between cities exists)
console.log(graph.nodesConnected(2, 3)); // Beta & Gamma: Output: false
console.log(graph.nodesConnected(5, 1)); // Epsilon & Alpha: Output: true

// Get Path between nodes (Route between two cities) by lowest number of intermediate nodes
let routeADistance = 0;
const routeA = graph.getPath(2, 3).map((value) => {
  // Between Beta (β) & Gamma (Γ)
  routeADistance += value.weight;
  return graph.getNode(value.node);
});
console.log(routeA, routeADistance);
/*
  ([Route] Total distance in miles)
  [ 'City β', 'City ε', 'City Γ' ] 875
*/

// Get Path between nodes (Route between two cities) by lowest distance (Dijkstra algorithm)
let routeB = graph.getPathWeighted(2, 3); // Between Beta (β) & Gamma (Γ)
let routeBDistance = routeB.distance;
routeB = routeB.nodes.map((value) => graph.getNode(value));
console.log(routeB, routeBDistance);
/*
  ([Route] Total distance in miles)
  [ 'City β', 'City ε', 'City Α', 'City Γ' ] 815
*/
