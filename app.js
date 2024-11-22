document.getElementById("simulate-btn").addEventListener("click", function() {
  const network = document.getElementById("network-diagram");
  network.innerHTML = ""; // Clear previous simulation

  // Create nodes
  for (let i = 0; i < 5; i++) {
    const node = document.createElement("div");
    node.style.position = "absolute";
    node.style.width = "20px";
    node.style.height = "20px";
    node.style.backgroundColor = "#007bff";
    node.style.borderRadius = "50%";
    node.style.top = Math.random() * 300 + "px";
    node.style.left = Math.random() * 400 + "px";
    network.appendChild(node);
  }

  // Display details
  const info = document.getElementById("info");
  info.innerText = "Simulation Complete! Nodes represent network components.";
});
