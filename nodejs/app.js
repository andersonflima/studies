const express = require("express");
const app = express();
app.use(express.json());

// In-memory data storage (for demonstration purposes)
let items = ["item1", "item2", "item3"];

// 1. Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Node.js API!" });
});

// 2. Get All Items
app.get("/items", (req, res) => {
  res.json({ items });
});

// 3. Get a Single Item by ID
app.get("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  if (itemId >= 0 && itemId < items.length) {
    res.json({ item: items[itemId] });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// 4. Add a New Item
app.post("/items", (req, res) => {
  const newItem = req.body.item;
  items.push(newItem);
  res.status(201).json({ message: `Item '${newItem}' added!`, items });
});

// 5. Update an Existing Item
app.put("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  if (itemId >= 0 && itemId < items.length) {
    const updatedItem = req.body.item;
    items[itemId] = updatedItem;
    res.json({ message: `Item '${updatedItem}' updated!`, items });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// 6. Delete an Item
app.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  if (itemId >= 0 && itemId < items.length) {
    const deletedItem = items.splice(itemId, 1);
    res.json({ message: `Item '${deletedItem}' deleted!`, items });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
