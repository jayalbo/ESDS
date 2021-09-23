import { jest } from "@jest/globals";
import { Graph } from "../ESDS.js";

// Undirected
const graph = new Graph();

// Add nodes (Users)
graph.addNode(1, "Randall");
graph.addNode(2, "Mellisa");
graph.addNode(3, "Cecelia");
graph.addNode(4, "Velda");
graph.addNode(5, "Rossie");

// Add Edges (Friendships)
graph.addEdge(1, 2);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 1);
graph.addEdge(5, 1);

// Nodes connected
test("nodesConnected", () => {
  expect(graph.nodesConnected(1, 5)).toBe(true);
  expect(graph.nodesConnected(2, 3)).toBe(false);
});

// Weight
test("getWeight", () => {
  expect(graph.getWeight(2, 3)).toBe(3);
  expect(graph.getWeight(4, 1)).toBe(1);
});

// Path
test("getPath", () =>
  expect(graph.getPath(2, 3).map((x) => x.node)).toStrictEqual([2, 1, 4, 3]));

// Directed

const dirGraph = new Graph(true);
// Add Nodes (Cities)
dirGraph.addNode(1, "City Α");
dirGraph.addNode(2, "City β");
dirGraph.addNode(3, "City Γ");
dirGraph.addNode(4, "City Δ");
dirGraph.addNode(5, "City ε");

// Add Edges (Routes between cities (one-way))

dirGraph.addEdge(1, 3, 75); // Alpha (Α) -> Gamma (Γ), distance 75 miles
dirGraph.addEdge(2, 5, 325); // Beta (β) -> Epsilon (ε), distance 325 miles
dirGraph.addEdge(3, 1, 125); //  Gamma (Γ) -> Alpha (α), distance 125 miles
dirGraph.addEdge(4, 2, 100); // Delta (Δ) -> Beta (β), distance 100 miles
dirGraph.addEdge(5, 1, 415); // Epsilon (ε) -> Alpha (Α), distance 415 miles
dirGraph.addEdge(5, 3, 550); // Epsilon (ε) -> Gamma (Γ), distance 550 miles

// Nodes connected
test("nodesConnected", () => {
  expect(dirGraph.nodesConnected(5, 1)).toBe(true);
  expect(dirGraph.nodesConnected(2, 3)).toBe(false);
});

// Weight (distance) - Shortest path (Unweighted)
test("getPath", () => {
  let dist = 0;
  let routePath = dirGraph.getPath(2, 3).map((value) => {
    dist += value.weight;
    return value.node;
  });
  expect(routePath).toStrictEqual([2, 5, 3]);
  expect(dist).toBe(875);
});

// Weight (distance) - Weighted (Dijkstra algorithm)
test("getPath", () => {
  let routePath = dirGraph.getPathWeighted(2, 3);
  let dist = routePath.distance;
  routePath = routePath.nodes.map((value) => value);

  expect(routePath).toStrictEqual([2, 5, 1, 3]);
  expect(dist).toBe(815);
});
