// Basic Fetch API example to interact with the Node.js API

const getItems = async () => {
    try {
        const response = await fetch('http://localhost:3000/items');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching items:', error);
    }
};

const addItem = async (item) => {
    try {
        const response = await fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ item }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error adding item:', error);
    }
};

getItems();
addItem('item4');
