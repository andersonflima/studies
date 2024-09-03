<?php
// File Handling in PHP

// 1. Writing to a File
$file = fopen("example.txt", "w");
fwrite($file, "Hello, world!\n");
fclose($file);

// 2. Reading from a File
$file = fopen("example.txt", "r");
$content = fread($file, filesize("example.txt"));
fclose($file);
echo "File Content:\n$content\n";

// 3. Appending to a File
$file = fopen("example.txt", "a");
fwrite($file, "Appending a new line.\n");
fclose($file);

// 4. Working with CSV Files
$csvFile = fopen("data.csv", "w");
fputcsv($csvFile, ["Name", "Age", "City"]);
fputcsv($csvFile, ["Alice", "30", "New York"]);
fputcsv($csvFile, ["Bob", "25", "Los Angeles"]);
fclose($csvFile);

// Reading from a CSV File
$csvFile = fopen("data.csv", "r");
while (($row = fgetcsv($
