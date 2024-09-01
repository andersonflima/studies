<?php
// File Handling in PHP

// Writing to a file
file_put_contents('example.txt', "Hello, world!\n");

// Reading from a file
$content = file_get_contents('example.txt');
echo $content;

// Working with CSV files
$csvFile = fopen('data.csv', 'w');
fputcsv($csvFile, ['Name', 'Age', 'City']);
fputcsv($csvFile, ['Alice', '30', 'New York']);
fputcsv($csvFile, ['Bob', '25', 'Los Angeles']);
fclose($csvFile);

$csvFile = fopen('data.csv', 'r');
while (($row = fgetcsv($csvFile)) !== FALSE) {
    print_r($row);
}
fclose($csvFile);
?>
