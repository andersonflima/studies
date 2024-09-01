const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Node.js API!' });
});

app.get('/items', (req, res) => {
    const items = ['item1', 'item2', 'item3'];
    res.json({ items: items });
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    res.status(201).json({ message: `Item '${newItem}' added!` });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
