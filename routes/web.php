<?php

use App\Http\Controllers\ProfileController;
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;

// 1. Route Home (Menggunakan data statis agar aman tanpa database dulu)
Route::get('/', function () {
    $projects = [
        [
            'title' => 'SIM Padepokan Pencak Silat Laskar Panglipur',
            'desc' => 'SIM Laskar Panglipur is a modern Management Information System that digitizes the administration of pencak silat organizations...',
            'image' => '/assets/project-sim.jpg',
            'link' => '/projects/sim-padepokan',
            'tech' => ['Laravel', 'React', 'Figma']
        ],
        [
            'title' => 'E-Learning Foreign Languages App Spikoo',
            'desc' => 'Spikoo is an innovative English learning platform designed to break down psychological barriers...',
            'image' => '/assets/project-spikoo.jpg',
            'link' => '/projects/spikoo',
            'tech' => ['Figma']
        ],
        [
            'title' => 'IoT Control Smart Box Hydroponics',
            'desc' => 'The IoT Control Smart Box is a smart farming solution that integrates IoT technology...',
            'image' => '/assets/project-iot.jpg',
            'link' => '/projects/iot-hydroponic',
            'tech' => ['Figma']
        ],
    ];

    return Inertia::render('Home', [
        'projects' => $projects
    ]);
});

// 2. Route Contact
Route::post('/contact-send', [ContactController::class, 'send'])->name('contact.send');

// 3. Route Detail Project (Data Statis)
Route::get('/projects/{slug}', function ($slug) {
    $allProjects = [
        'sim-padepokan' => [
            'title' => 'SIM Padepokan Pencak Silat Laskar Panglipur',
            'desc' => 'SIM Laskar Panglipur is a modern Management Information System...',
            'tech' => ['html5', 'css3', 'javascript', 'laravel', 'react', 'figma'],
            'image' => '/assets/project-sim.jpg',
            'role' => 'Fullstack Developer & UI Designer',
            'platform' => 'Web Management System',
            'live_url' => 'https://github.com/Ardialfarisi23/sim-padepokan-panglipur',
            'challenge' => 'The main challenge in the management of the Laskar Panglipur...',
            'solution' => 'As a solution, a Management Information System (MIS) based on the Laravel and React.js...',
            'gallery' => ['/assets/SIM-process-1.png', '/assets/SIM-process-2.jpg']
        ],
        'spikoo' => [
            'title' => 'E-Learning Foreign Languages App Spikoo',
            'desc' => 'Spikoo is an innovative English learning platform...',
            'tech' => ['figma'],
            'role' => 'UI/UX Designer',
            'platform' => 'Mobile Application (Android/iOS)',
            'live_url' => 'https://www.figma.com/...',
            'image' => '/assets/project-spikoo.jpg',
            'challenge' => 'The main challenge in developing an English e-learning...',
            'solution' => 'The Spikoo application comes with an integration of Design Thinking...',
            'gallery' => ['/assets/spikoo-process-1.png', '/assets/spikoo-process-2.png']
        ],
        'iot-hydroponic' => [
            'title' => 'IoT Control Smart Box Hydroponics',
            'desc' => 'The IoT Control Smart Box is a smart farming solution...',
            'tech' => ['Figma'],
            'role' => 'System Analyst & UI Designer',
            'platform' => 'IoT Dashboard & Mobile App',
            'image' => '/assets/project-iot.jpg',
            'challenge' => 'The main challenges in conventional hydroponic...',
            'solution' => 'As a solution, the IoT Control Smart Box Hydroponics was developed...',
            'gallery' => ['/assets/iot-process-1.png', '/assets/iot-process-2.png']
        ],
    ];

    if (!array_key_exists($slug, $allProjects)) {
        abort(404);
    }

    return Inertia::render('ProjectDetail', [
        'project' => $allProjects[$slug]
    ]);
});

// 4. Route List Projects
Route::get('/projects', function () {
    // Ambil data yang sama untuk halaman list
    $projects = [
        /* ... isi array yang sama dengan di Home ... */
    ];

    return Inertia::render('Projects', [
        'projects' => $projects
    ]);
});

require __DIR__.'/auth.php';