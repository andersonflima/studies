<?php
// Simple PHP API Example using RESTful Routes

header("Content-Type: application/json");

$requestMethod = $_SERVER["REQUEST_METHOD"];

// In-memory data storage (for demonstration purposes)
$items = ["item1", "item2", "item3"];

switch ($requestMethod) {
    case "GET":
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            if (isset($items[$id])) {
                echo json_encode(["item" => $items[$id]]);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Item not found"]);
            }
        } else {
            echo json_encode(["items" => $items]);
        }
        break;

    case "POST":
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['item'])) {
            $items[] = $input['item'];
            http_response_code(201);
            echo json_encode(["message" => "Item added", "item" => $input['item']]);
        } else {
            http_response_code(400);
            echo json_encode(["error" => "Invalid input"]);
        }
        break;

    case "PUT":
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $input = json_decode(file_get_contents('php://input'), true);
            if (isset($items[$id]) && isset($input['item'])) {
                $items[$id] = $input['item'];
                echo json_encode(["message" => "Item updated", "item" => $input['item']]);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Item not found or invalid input"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["error" => "Invalid ID"]);
        }
        break;

    case "DELETE":
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            if (isset($items[$id])) {
                unset($items[$id]);
                echo json_encode(["message" => "Item deleted"]);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Item not found"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["error" => "Invalid ID"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
        break;
}
?>
