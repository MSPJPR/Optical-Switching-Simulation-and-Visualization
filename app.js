const networkDiagram = document.getElementById("network-diagram");
const info = document.getElementById("info");

let nodes = [];
let edges = [];

// Function to add a node
document.getElementById("add-node-btn").addEventListener("click", () => {
  const node = document.createElement("div");
  node.classList.add("node");
  node.style.top = Math.random() * 300 + "px";
  node.style.left = Math.random() * 400 + "px";

  nodes.push(node);
  networkDiagram.appendChild(node);
  updateInfo();
});

// Function to simulate routing
document.getElementById("simulate-btn").addEventListener("click", () => {
  // Clear previous edges
  edges.forEach(edge => networkDiagram.removeChild(edge));
  edges = [];

  // Connect nodes with edges
  for (let i = 0; i < nodes.length - 1; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const edge = createEdge(nodes[i], nodes[j]);
      edges.push(edge);
      networkDiagram.appendChild(edge);
    }
  }
  info.innerText = "Routing simulation complete! Edges represent optical paths.";
});

// Function to create an edge between two nodes
function createEdge(node1, node2) {
  const edge = document.createElement("div");
  edge.classList.add("edge");

  const x1 = node1.offsetLeft + 10; // Center of node1
  const y1 = node1.offsetTop + 10; // Center of node1
  const x2 = node2.offsetLeft + 10; // Center of node2
  const y2 = node2.offsetTop + 10; // Center of node2

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  edge.style.width = length + "px";
  edge.style.left = x1 + "px";
  edge.style.top = y1 + "px";
  edge.style.transform = `rotate(${angle}deg)`;

  return edge;
}

// Function to update details
function updateInfo() {
  info.innerText = `Total Nodes: ${nodes.length}`;
}
