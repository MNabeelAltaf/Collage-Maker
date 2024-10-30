<?php
// URL of the file
$url = "https://tikcdn.io/ssstik/aHR0cHM6Ly9zZjE2LnRpa3Rva2Nkbi11cy5jb20vb2JqL2llcy1tdXNpYy10eDIvNzM4NjcxOTExMTA3OTgwNzc3NS5tcDM=";

// Get headers from the URL
$headers = get_headers($url, 1);

// Check if headers were retrieved successfully
if ($headers) {
    // Get the content type
    $contentType = $headers["Content-Type"];
    
    // Get the content length (file size in bytes)
    $contentLengthBytes = isset($headers["Content-Length"]) ? $headers["Content-Length"] : 'Unknown';
    
    // Convert bytes to megabytes
    $contentLengthMB = ($contentLengthBytes != 'Unknown') ? number_format($contentLengthBytes / 1048576, 2) : 'Unknown';

    // Display the information
    echo "Content Type: " . $contentType . "<br>";
    echo "Content Length: " . $contentLengthMB . " MB<br>";
} else {
    echo "Failed to retrieve headers.";
}
?>
