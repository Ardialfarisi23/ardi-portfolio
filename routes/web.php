<?php

use App\Http\Controllers\ProfileController;
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;

$projectCatalog = [
    [
        'title' => 'SIM Padepokan Pencak Silat Laskar Panglipur',
        'desc' => 'SIM Laskar Panglipur is a modern Management Information System that digitizes the administration of pencak silat organizations...',
        'image' => '/assets/project-sim.jpg',
        'link' => '/projects/sim-padepokan',
        'tech' => ['Laravel', 'React', 'Figma']
    ],
    [
        'title' => 'Galeri Kreatif Garut',
        'desc' => 'An integrated e-commerce and tourism platform for the digitalization of MSMEs in Garut, West Java.',
        'image' => '/assets/GaleriGarut1.jpg',
        'link' => '/projects/galeri-kreatif-garut',
        'tech' => ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Strapi', 'PostgreSQL']
    ],
    [
        'title' => 'AGRO-GUARD PWA (Smart Farming Assistant)',
        'desc' => 'An AI-powered Progressive Web App that helps farmers diagnose crop diseases and pests in real-time using a mobile phone camera.',
        'image' => '/assets/Agro1.jpg',
        'link' => '/projects/agro-guard-pwa',
        'tech' => ['Laravel', 'React', 'TensorFlow.js', 'Workbox.js', 'Tailwind CSS', 'MySQL', 'IndexedDB', 'Vite']
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

// 1. Route Home (Menggunakan data statis agar aman tanpa database dulu)
Route::get('/', function () use ($projectCatalog) {
    $featuredProjects = array_slice($projectCatalog, 0, 3);

    return Inertia::render('Home', [
        'projects' => $featuredProjects
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
            'challenge' => 'The main challenge in the management of the Laskar Panglipur Pencak Silat organization was the manual and fragmented operational system. This led to inefficiencies in member data collection, scheduling, and financial administration, hindering the organization\'s growth potential.',
            'solution' => 'As a solution, a Management Information System (MIS) based on the Laravel and React.js frameworks was developed. This system integrates all administrative aspects into a single digital platform, automating member registration, training schedules, and financial reporting to improve overall management efficiency.',
            'gallery' => ['/assets/SIM-process-1.png', '/assets/SIM-process-2.jpg']
        ],
        'spikoo' => [
            'title' => 'E-Learning Foreign Languages App Spikoo',
            'desc' => 'Spikoo is an innovative English learning platform...',
            'tech' => ['figma'],
            'role' => 'UI/UX Designer',
            'platform' => 'Mobile Application (Android/iOS)',
            'live_url' => 'https://www.figma.com/proto/7Y7lgRNcpCYuX23wk01GqE/Spikoo?node-id=294-30012&viewport=431%2C984%2C0.11&t=UB4xcaNgMMBJrKx1-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=318%3A15334&page-id=0%3A1',
            'image' => '/assets/project-spikoo.jpg',
            'challenge' => 'The main challenge in developing an English e-learning application is overcoming the psychological barriers of users, such as fear of making mistakes and lack of confidence. The design must be able to create a learning environment that is supportive, engaging, and not intimidating.',
            'solution' => 'The Spikoo application comes with an integration of Design Thinking and gamification principles. Features like interactive exercises, progress tracking with rewarding badges, and a friendly user interface are designed to build user confidence and make the learning process enjoyable and adaptive.',
            'gallery' => ['/assets/spikoo-process-1.png', '/assets/spikoo-process-2.png']
        ],
        'iot-hydroponic' => [
            'title' => 'IoT Control Smart Box Hydroponics',
            'desc' => 'The IoT Control Smart Box is a smart farming solution...',
            'tech' => ['figma'],
            'role' => 'System Analyst & UI Designer',
            'platform' => 'IoT Dashboard & Mobile App',
            'live_url' => 'https://www.figma.com/proto/MoqrRyK9y6ut4tZ2E1QRFd/Ardi-Alfariisi-22572014-UI-UX?node-id=1081-4012&viewport=893%2C-1064%2C0.51&t=UisMiLqfD3Uej3VI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1081%3A4012&page-id=1081%3A3504',
            'image' => '/assets/project-iot.jpg',
            'challenge' => 'The main challenges in conventional hydroponic systems are the need for constant manual monitoring of pH levels, nutrition, and water temperature. This is not only time-consuming but also prone to human error, which can affect plant health and yield.',
            'solution' => 'As a solution, the IoT Control Smart Box Hydroponics was developed. This system uses sensors to monitor environmental conditions in real-time and actuators to automatically adjust nutrition and pH. All data is displayed on an intuitive dashboard, allowing for remote and precise control.',
            'gallery' => ['/assets/iot-process-1.png', '/assets/iot-process-2.png']
        ],
        'agro-guard-pwa' => [
            'title' => 'AGRO-GUARD PWA (Smart Farming Assistant)',
            'desc' => 'An AI-powered Progressive Web App that helps farmers diagnose crop diseases and pests in real-time using a mobile phone camera.',
            'tech' => ['laravel', 'react', 'tensorflowjs', 'workbox', 'tailwindcss', 'mysql', 'indexeddb', 'vite'],
            'role' => 'Fullstack Developer & AI Product Builder',
            'platform' => 'Progressive Web App',
            'live_url' => 'https://github.com/Ardialfarisi23/web-deteksi-hama-penyakit-tanaman',
            'image' => '/assets/Agro1.jpg',
            'challenge' => 'Farmers often face limited access to agricultural experts and rapid diagnostic tools, especially when in the field without a stable internet connection.',
            'solution' => 'AGRO-GUARD was developed as a PWA capable of diagnosing crop pests and diseases directly via the mobile phone camera, performing AI inference locally, and storing data while offline for synchronization once the connection is restored.',
            'gallery' => ['/assets/Agro2.png', '/assets/Agro3.png']
        ],
        'galeri-kreatif-garut' => [
            'title' => 'Galeri Kreatif Garut',
            'desc' => 'An integrated e-commerce and tourism platform for the digitalization of MSMEs in Garut, West Java.',
            'tech' => ['nextjs', 'typescript', 'react', 'tailwindcss', 'strapi', 'postgresql'],
            'role' => 'Fullstack Developer & Product Designer',
            'platform' => 'E-commerce & Tourism Platform',
            'live_url' => 'https://github.com/Ardialfarisi23/Galeri_Kreatif_Garut',
            'image' => '/assets/GaleriGarut1.jpg',
            'challenge' => 'MSMEs in Garut hold great potential but still struggle to reach markets digitally and convey the cultural stories behind their products.',
            'solution' => 'Galeri Kreatif Garut was developed as an integrated platform that combines an online marketplace, cultural storytelling, and location-based store search to connect tourists with local MSMEs.',
            'gallery' => [ '/assets/GaleriGarut2.png', '/assets/GaleriGarut3.png']
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
Route::get('/projects', function () use ($projectCatalog) {
    return Inertia::render('Projects', [
        'projects' => $projectCatalog
    ]);
});

require __DIR__.'/auth.php';