import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the TypeScript API!' });
});

app.get('/items', (req: Request, res: Response) => {
    const items = ['item1', 'item2', 'item3'];
    res.json({ items: items });
});

app.post('/items', (req: Request, res: Response) => {
    const newItem = req.body.item;
    res.status(201).json({ message: `Item '${newItem}' added!` });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
