// Enhanced Fetch API example to interact with the Node.js API

const API_URL = "http://localhost:3000/items";

// 1. Fetching Items from the API
const getItems = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Items:", data);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

// 2. Adding an Item to the API
const addItem = async (item) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Added Item:", data);
  } catch (error) {
    console.error("Error adding item:", error);
  }
};

// 3. Updating an Item in the API
const updateItem = async (id, updatedItem) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: updatedItem }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Updated Item:", data);
  } catch (error) {
    console.error("Error updating item:", error);
  }
};

// 4. Deleting an Item from the API
const deleteItem = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Deleted Item:", data);
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

// Example Usage:
getItems();
addItem("item4");
updateItem(1, "updatedItem");
deleteItem(1);
