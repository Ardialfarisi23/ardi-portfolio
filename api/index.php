<?php
// api/index.php

mkdir('/tmp/storage/framework/views', 0755, true);
mkdir('/tmp/storage/framework/cache', 0755, true);
mkdir('/tmp/storage/framework/sessions', 0755, true);

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