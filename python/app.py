from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Python API!"})

@app.route('/items', methods=['GET'])
def get_items():
    items = ["item1", "item2", "item3"]
    return jsonify({"items": items})

@app.route('/items', methods=['POST'])
def add_item():
    new_item = request.json.get('item')
    return jsonify({"message": f"Item '{new_item}' added!"}), 201

if __name__ == '__main__':
    app.run(debug=True)
