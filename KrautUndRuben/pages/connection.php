<?php
$db_server="REDACTED_ROTATED_CREDENTIAL";
$db_user="REDACTED_ROTATED_CREDENTIAL";
$db_pass="REDACTED_ROTATED_CREDENTIAL";
$db_name="REDACTED_ROTATED_CREDENTIAL_krautundruebenDB";

$connection = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

if (!$connection) {
    die("DB Connection Failed.".mysqli_connect_error());
}
$connection->set_charset("utf8mb4");
?>