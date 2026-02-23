<?php
// api/index.php

$paths = [
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/bootstrap/cache', // Tambahkan ini
];

foreach ($paths as $path) {
    if (!is_dir($path)) {
        mkdir($path, 0755, true);
    }
}

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';

// --- TAMBAHKAN KODE INI DI SINI ---
// Memaksa Laravel menggunakan folder /tmp untuk semua cache dan views
$app->useStoragePath('/tmp/storage');
$app->setCompiledViewPath('/tmp/storage/framework/views');
// ----------------------------------

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);
$response->send();
$kernel->terminate($request, $response);