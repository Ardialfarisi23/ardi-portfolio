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
            'live_url' => 'https://github.com/Ardialfarisi23/sim-padepokan-panglipur', // <-- URL SUDAH BENAR
            'challenge' => 'The main challenge in the management of the Laskar Panglipur Pencak Silat organization was the manual and fragmented operational system. This led to inefficiencies in member data collection, scheduling, and financial administration, hindering the organization\'s growth potential.', // <-- LENGKAPI TEKS DI SINI
            'solution' => 'As a solution, a Management Information System (MIS) based on the Laravel and React.js frameworks was developed. This system integrates all administrative aspects into a single digital platform, automating member registration, training schedules, and financial reporting to improve overall management efficiency.', // <-- LENGKAPI TEKS DI SINI
            'gallery' => ['/assets/SIM-process-1.png', '/assets/SIM-process-2.jpg']
        ],
        'spikoo' => [
            'title' => 'E-Learning Foreign Languages App Spikoo',
            'desc' => 'Spikoo is an innovative English learning platform...',
            'tech' => ['figma'],
            'role' => 'UI/UX Designer',
            'platform' => 'Mobile Application (Android/iOS)',
            'live_url' => 'https://www.figma.com/proto/7Y7lgRNcpCYuX23wk01GqE/Spikoo?node-id=294-30012&viewport=431%2C984%2C0.11&t=UB4xcaNgMMBJrKx1-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=318%3A15334&page-id=0%3A1', // <-- LENGKAPI URL FIGMA ANDA DI SINI
            'image' => '/assets/project-spikoo.jpg',
            'challenge' => 'The main challenge in developing an English e-learning application is overcoming the psychological barriers of users, such as fear of making mistakes and lack of confidence. The design must be able to create a learning environment that is supportive, engaging, and not intimidating.', // <-- LENGKAPI TEKS DI SINI
            'solution' => 'The Spikoo application comes with an integration of Design Thinking and gamification principles. Features like interactive exercises, progress tracking with rewarding badges, and a friendly user interface are designed to build user confidence and make the learning process enjoyable and adaptive.', // <-- LENGKAPI TEKS DI SINI
            'gallery' => ['/assets/spikoo-process-1.png', '/assets/spikoo-process-2.png']
        ],
        'iot-hydroponic' => [
            'title' => 'IoT Control Smart Box Hydroponics',
            'desc' => 'The IoT Control Smart Box is a smart farming solution...',
            'tech' => ['figma'],
            'role' => 'System Analyst & UI Designer',
            'platform' => 'IoT Dashboard & Mobile App',
            'live_url' => 'https://www.figma.com/proto/MoqrRyK9y6ut4tZ2E1QRFd/Ardi-Alfariisi-22572014-UI-UX?node-id=1081-4012&viewport=893%2C-1064%2C0.51&t=UisMiLqfD3Uej3VI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1081%3A4012&page-id=1081%3A3504', // <-- TAMBAHKAN URL REPOSITORY ATAU FIGMA JIKA ADA
            'image' => '/assets/project-iot.jpg',
            'challenge' => 'The main challenges in conventional hydroponic systems are the need for constant manual monitoring of pH levels, nutrition, and water temperature. This is not only time-consuming but also prone to human error, which can affect plant health and yield.', // <-- LENGKAPI TEKS DI SINI
            'solution' => 'As a solution, the IoT Control Smart Box Hydroponics was developed. This system uses sensors to monitor environmental conditions in real-time and actuators to automatically adjust nutrition and pH. All data is displayed on an intuitive dashboard, allowing for remote and precise control.', // <-- LENGKAPI TEKS DI SINI
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

    return Inertia::render('Projects', [
        'projects' => $projects
    ]);
});

require __DIR__.'/auth.php';