<?php

	$dbuser = "ypitchika";
	$dbpass = "shuau123";
	$db = "SSID";

	$connect = OCILOGON($dbuser,$dbpass,$db);
	if (!$connect){
		echo "Failed to connect to DB";
		exit;
		}
?>