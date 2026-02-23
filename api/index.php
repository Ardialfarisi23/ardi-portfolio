<?php
// api/index.php

// Pastikan folder tmp dibuat hanya jika belum ada
$paths = [
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache',
    '/tmp/storage/framework/sessions',
];

foreach ($paths as $path) {
    if (!is_dir($path)) {
        mkdir($path, 0755, true);
    }
}

// 1. Panggil autoload dari vendor
require __DIR__ . '/../vendor/autoload.php';

// 2. Jalankan bootstrap Laravel (tanpa memanggil public/index.php lagi)
$app = require_once __DIR__ . '/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);