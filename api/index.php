<?php

// Memuat Autoloader Composer secara manual
require __DIR__ . '/../vendor/autoload.php';

// Memuat aplikasi Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';

// Menjalankan aplikasi
require __DIR__ . '/../public/index.php';