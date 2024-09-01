<?php
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_SERVER['REQUEST_URI'] === '/items') {
        echo json_encode(["items" => ["item1", "item2", "item3"]]);
    } else {
        echo json_encode(["message" => "Welcome to the PHP API!"]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $newItem = $data['item'] ?? 'undefined';
    echo json_encode(["message" => "Item '$newItem' added!"]);
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
