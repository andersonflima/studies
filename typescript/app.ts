import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

// Type definition for an item
interface Item {
  id: number;
  name: string;
}

let items: Item[] = [
  { id: 1, name: "item1" },
  { id: 2, name: "item2" },
  { id: 3, name: "item3" },
];

// 1. Root Route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the TypeScript API!" });
});

// 2. Get All Items
app.get("/items", (req: Request, res: Response) => {
  res.json({ items });
});

// 3. Get a Single Item by ID
app.get("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find((item) => item.id === id);
  if (item) {
    res.json({ item });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// 4. Add a New Item
app.post("/items", (req: Request, res: Response) => {
  const { name } = req.body;
  const newItem: Item = { id: items.length + 1, name };
  items.push(newItem);
  res
    .status(201)
    .json({ message: `Item '${newItem.name}' added!`, item: newItem });
});

// 5. Update an Existing Item
app.put("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex > -1) {
    items[itemIndex].name = name;
    res.json({ message: `Item '${name}' updated!`, item: items[itemIndex] });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// 6. Delete an Item
app.delete("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex > -1) {
    const deletedItem = items.splice(itemIndex, 1);
    res.json({
      message: `Item '${deletedItem[0].name}' deleted!`,
      item: deletedItem[0],
    });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
