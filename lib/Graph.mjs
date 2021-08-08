import { Queue } from "./Queue.mjs";
import { PriorityQueue } from "./PriorityQueue.mjs";

/**
 * Represents an Node in the Graph.
 */
class Node {
  /**
   * @param {any} [val] - The value of the element
   */
  constructor(value = null) {
    this.value = value;
    this.edges = new Map();
  }
}
/**
 * Graph Class
 */
class Graph {
  constructor(directed = false) {
    this.directed = directed;
    this.nodes = new Map();
    this.vertices = 0;
    this.edgesNumber = 0;
  }
  _nodeExists(id) {
    return this.nodes.has(id);
  }
  /**
   * Adds a new node to the graph
   * @param {number|string} id
   * @param {any=} val
   */
  addNode(id, value = null) {
    if (typeof id === "string" || typeof id === "number") {
      if (this._nodeExists(id)) throw new Error("Node already exists");
      this.nodes.set(id, new Node(value));
      this.vertices++;
    } else throw new Error("Invalid node id type");
  }
  /**
   * Updates value for an existing node
   * @param {number|string} id
   * @param {any=} val
   * @returns {boolean}
   */
  updateNode(id, value) {
    if (!this._nodeExists(id)) throw new Error("Node does not exists");
    this.nodes.set(id).value = value;
    return true;
  }
  /**
   * Remove the node, and its edges across all the nodes
   * @param {number|string} id
   * @returns {boolean}
   */
  removeNode(id) {
    if (!this._nodeExists(id)) throw new Error("Node does not exists");
    if (!this.directed) {
      // Remode edges based on edges at index element
      this.nodes.get(id).edges.forEach((value, key) => {
        this.nodes.get(key).edges.delete(id);
      });
    } else {
      // Remode edges checking within each element
      this.nodes.forEach((value) => {
        if (value.edges.has(id)) value.edges.delete(id);
      });
    }
    this.nodes.delete(id);
    return true;
  }
  /**
   * Returns true/false if edge exists between two nodes
   * @param {number|string} nodeA
   * @param {number|string} nodeB
   * @returns {boolean} - True/False if connection exists between nodes
   */
  nodesConnected(nodeA, nodeB) {
    if (!this._nodeExists(nodeA) || !this._nodeExists(nodeB))
      throw new Error("Node does not exists");
    return this.nodes.get(nodeA).edges.has(nodeB);
  }
  /**
   * Adds a new edge between two nodes
   * @param {number|string} nodeA
   * @param {number|string} nodeB
   * @param {any=} weight - Optional, default 1 if not provided
   */
  addEdge(nodeA, nodeB, weight = 1) {
    if (!this._nodeExists(nodeA) || !this._nodeExists(nodeB))
      throw new Error("Node does not exists");

    if (this.nodes.get(nodeA).edges.has(nodeB))
      throw new Error(`Edge(${nodeA}-${nodeB}) already exists`);

    this.nodes.get(nodeA).edges.set(nodeB, weight);
    if (!this.directed) this.nodes.get(nodeB).edges.set(nodeA, weight);
    this.edgesNumber++;
  }
  /**
   * Updates the weight of an existing edge between two nodes
   * @param {number|string} nodeA
   * @param {number|string} nodeB
   * @param {weight=} weight - Optional, default 1 if not provided
   * @returns {boolean}
   */
  updateEdge(nodeA, nodeB, weight = 1) {
    if (!this._nodeExists(nodeA) || !this._nodeExists(nodeB))
      throw new Error("Node does not exists");

    if (!this.nodes.get(nodeA).edges.has(nodeB))
      throw new Error("Edge does not exists ");
    this.nodes.get(nodeA).edges.set(nodeB, weight);
    if (!this.directed) this.nodes.get(nodeB).edges.set(nodeA, weight);
    this.edgesNumber++;
    return true;
  }
  /**
   * Removes an existing edge between two nodes
   * @param {number|string} nodeA
   * @param {number|string} nodeB
   * @returns {boolean}
   */
  removeEdge(nodeA, nodeB) {
    if (!this._nodeExists(nodeA) || !this._nodeExists(nodeB))
      throw new Error("Node does not exists");

    if (!this.nodes.get(nodeA).edges.has(nodeB))
      throw new Error("Edge does not exists ");
    this.nodes.get(nodeA).edges.delete(nodeB);
    if (!this.directed) this.nodes.get(nodeB).edges.delete(nodeA);
    this.edgesNumber--;
    return true;
  }
  /**
   * Returns value of node
   * @param {number|string} id
   * @returns {any} - Value
   */
  getNode(id) {
    if (!this._nodeExists(id)) throw new Error("Node does not exists");
    return this.nodes.get(id).value;
  }
  /**
   * Returns array of the shortest weighted path between two nodes (Dijkstra algorithm)
   * Based on the shortest number of intermediate nodes
   * @param {number|string} nodeA
   * @param {number|string} nodeB
   * @returns {Array[]} - [{nodes: [], distance: number}]
   */
  getPathWeighted(nodeA, nodeB) {
    const distances = new Map();
    const pq = new PriorityQueue("custom", (a, b) => a.distance - b.distance); // Using distance (min)

    pq.add({ key: nodeA, distance: 0, nodes: [nodeA] });

    for (let [key] of this.nodes)
      distances.set(key, { nodes: [], distance: Infinity });

    while (!pq.isEmpty) {
      const element = pq.poll();
      const edges = this.nodes.get(element.key).edges;
      const currentNodeDistance = distances.get(element.key);
      if (currentNodeDistance.distance > element.distance) {
        // If distance is smaller than current
        distances.set(element.key, {
          nodes: element.nodes,
          distance: element.distance,
        });
        // console.log(edges);

        edges.forEach((value, key) => {
          pq.add({
            key,
            distance:
              element.distance == Infinity ? value : element.distance + value,
            nodes: [...element.nodes, key],
          });
        });
      }
    }
    if (distances.get(nodeB).distance !== Infinity) return distances.get(nodeB);
    throw new Error(`Nodes ${nodeA} and ${nodeB} are not connected`);
  }

  /**
   * Returns array of the shortest path between two nodes
   * Based on the shortest number of intermediate nodes
   * @param {number|string} nodeA
   * @param {number|string} nodeB
   * @returns {Array[]} - [{node, weight}]
   */
  getPath(nodeA, nodeB) {
    if (!this._nodeExists(nodeA) || !this._nodeExists(nodeB))
      throw new Error("Node does not exists");
    if (nodeA === nodeB) return false;

    // BFS
    const visited = new Set();
    const queue = new Queue();

    queue.add({
      edges: this.nodes.get(nodeA).edges,
      nodePath: [{ node: nodeA, weight: 0 }],
    });
    visited.add(nodeA);

    while (!queue.isEmpty) {
      const { edges, nodePath } = queue.poll();

      for (let [key, value] of edges) {
        if (key === nodeB) return [...nodePath, { node: key, weight: value }];
        if (!visited.has(key)) {
          queue.add({
            edges: this.nodes.get(key).edges,
            nodePath: [...nodePath, { node: key, weight: value }],
          });
          visited.add(key);
        }
      }
    }
    throw new Error(`Nodes ${nodeA} and ${nodeB} are not connected`);
  }
  /**
   * Returns number of nodes in the graph
   * @returns {number} - Number of nodes
   */
  get size() {
    return this.vertices;
  }
  /**
   * Returns number of edges in the graph
   * @returns {number} - Number of edges
   */
  get edges() {
    return this.edgesNumber;
  }
  /**
   * Returns the sum of weights between two nodes, including intermediate ones.
   * Based on the shortest number of intermediate nodes
   * @param {number|string} nodeA
   * @param {number|string} nodeB
   * @returns {number}
   */
  getWeight(nodeA, nodeB) {
    if (!this._nodeExists(nodeA) || !this._nodeExists(nodeB))
      throw new Error("Node does not exists");
    if (nodeA === nodeB) return 0;

    // BFS
    const visited = new Set();
    const queue = new Queue();

    queue.add({ edges: this.nodes.get(nodeA).edges, weight: 0 });
    visited.add(nodeA);

    while (!queue.isEmpty) {
      const { edges, weight } = queue.poll();

      for (let [key, value] of edges) {
        if (key === nodeB) return weight + value;
        if (!visited.has(key)) {
          queue.add({
            edges: this.nodes.get(key).edges,
            weight: weight + value,
          });
          visited.add(key);
        }
      }
    }
    throw new Error(`Nodes ${nodeA} and ${nodeB} are not connected`);
  }
}
export { Graph };
