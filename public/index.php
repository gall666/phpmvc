<?php
if (!session_id()) session_start();
//bootstraping || memanggil seluruh aplikasi MVC

require_once '../app/init.php';

$app = new App;
