from flask import Flask, jsonify, request, abort

app = Flask(__name__)

# In-memory database (for demonstration purposes)
items = ["item1", "item2", "item3"]


# 1. Home Route
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the Python API!"})


# 2. Get All Items
@app.route("/items", methods=["GET"])
def get_items():
    return jsonify({"items": items})


# 3. Get Single Item by Index
@app.route("/items/<int:index>", methods=["GET"])
def get_item(index):
    try:
        item = items[index]
        return jsonify({"item": item})
    except IndexError:
        abort(404, description="Item not found")


# 4. Add a New Item
@app.route("/items", methods=["POST"])
def add_item():
    if not request.json or "item" not in request.json:
        abort(400, description="Invalid input, 'item' field is required")
    new_item = request.json["item"]
    items.append(new_item)
    return jsonify({"message": f"Item '{new_item}' added!"}), 201


# 5. Update an Existing Item
@app.route("/items/<int:index>", methods=["PUT"])
def update_item(index):
    if not request.json or "item" not in request.json:
        abort(400, description="Invalid input, 'item' field is required")
    try:
        items[index] = request.json["item"]
        return jsonify(
            {"message": f"Item at index {index} updated to '{items[index]}'"}
        )
    except IndexError:
        abort(404, description="Item not found")


# 6. Delete an Item
@app.route("/items/<int:index>", methods=["DELETE"])
def delete_item(index):
    try:
        deleted_item = items.pop(index)
        return jsonify({"message": f"Item '{deleted_item}' deleted!"})
    except IndexError:
        abort(404, description="Item not found")


# 7. Error Handling
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": str(error)}), 404


@app.errorhandler(400)
def bad_request(error):
    return jsonify({"error": str(error)}), 400


if __name__ == "__main__":
    app.run(debug=True)
