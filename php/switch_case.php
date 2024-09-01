<?php
// Switch Case in PHP

function switchCaseExample($value) {
    switch ($value) {
        case 1:
            return "Value is 1";
        case 2:
            return "Value is 2";
        case 3:
            return "Value is 3";
        default:
            return "Value is something else";
    }
}

echo switchCaseExample(1) . "\n";
echo switchCaseExample(4) . "\n";
?>
