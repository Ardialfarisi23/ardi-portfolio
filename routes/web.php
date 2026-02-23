<?php

use App\Http\Controllers\ProfileController;
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;

// Route untuk Halaman Utama (Home)
Route::get('/', function () {
    return Inertia::render('Home', [
        'projects' => Project::all(), // Kita kirim data proyek ke React!
    ]);
});

Route::post('/contact-send', [ContactController::class, 'send'])->name('contact.send');

Route::get('/projects/{slug}', function ($slug) {
    // Kumpulan data semua project kamu
    $allProjects = [
        'sim-padepokan' => [
            'title' => 'SIM Padepokan Pencak Silat Laskar Panglipur',
            'desc' => 'SIM Laskar Panglipur is a modern Management Information 
            System that digitizes the administration of pencak silat organizations 
            through Laravel and React.js architecture. This project transforms 
            conventional data management into a centralized system equipped with 
            an Analytics Dashboard and a responsive interface from Tailwind CSS, 
            thus creating operational efficiency and accurate member data that can 
            be accessed anytime in real-time.',
            'tech' => ['html5', 'css3', 'javascript', 'laravel', 'react', 'figma'],
            'image' => '/assets/project-sim.jpg',
            'role' => 'Fullstack Developer & UI Designer',
            'platform' => 'Web Management System',
            'live_url' => 'https://github.com/Ardialfarisi23/sim-padepokan-panglipur',
            'challenge' => 'The main challenge in the management of the Laskar Panglipur 
                            organization is the dependence on conventional administrative 
                            systems that hinder the efficiency of member data processing, 
                            as well as the minimal accessibility of real-time integrated 
                            data, so that a digital transformation is needed that is able 
                            to integrate complex data management into a modern and responsive 
                            information system architecture.',
            'solution' => 'As a solution, a Management Information System (MIS) based 
                            on the Laravel and React.js frameworks was developed that integrates Dashboard 
                            Analytics features and centralized CRUD management, where the implementation 
                            of interface design through Figma and the use of Tailwind CSS ensures an optimal 
                            and adaptive user experience across various devices to improve the efficiency 
                            of organizational administration digitally.',
            'gallery' => ['/assets/SIM-process-1.png', '/assets/SIM-process-2.jpg']
        ],
        'spikoo' => [
            'title' => 'E-Learning Foreign Languages App Spikoo',
            'desc' => 'Spikoo is an innovative English learning platform
             designed to break down psychological barriers like lack 
             of confidence and limited vocabulary. By integrating Design 
             Thinking methods and System Usability Scale (SUS) evaluation, 
             the app offers an intuitive interface and adaptive learning experience, 
             enabling users to improve their speaking skills through effective digital 
             interactions to compete globally.',
            'tech' => ['figma'],
            'role' => 'UI/UX Designer',
            'platform' => 'Mobile Application (Android/iOS)',
            'live_url' => 'https://www.figma.com/proto/7Y7lgRNcpCYuX23wk01GqE/Spikoo?page-id=0%3A1&node-id=318-16162&viewport=306%2C1331%2C0.19&t=bwbWoE1T5s1NaJnS-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=318%3A15334',
            'image' => '/assets/project-spikoo.jpg',
            'challenge' => 'The main challenge in developing an English e-learning 
                            application lies in how to design a platform that is not 
                            only able to overcome the barriers of low self-confidence 
                            and limited vocabulary of users through innovative interactive 
                            learning methods, but also able to integrate the Design Thinking 
                            approach and System Usability Scale (SUS) evaluation to create 
                            an intuitive interface (UI/UX), so that the technology is truly 
                            effective in increasing the global competitiveness of users 
                            amidst the complexity of international communication needs.',
            'solution' => 'The Spikoo application comes with an integration of Design 
                            Thinking methods to create an intuitive interface and a 
                            supportive user experience, specifically designed to overcome 
                            psychological barriers in speaking English through interactive 
                            e-learning-based features that have been validated using the 
                            System Usability Scale (SUS) to ensure optimal learning 
                            effectiveness and comfort for users in increasing their 
                            global competitiveness.',
            'gallery' => ['/assets/spikoo-process-1.png', '/assets/spikoo-process-2.png']
        ],
        'iot-hydroponic' => [
    'title' => 'IoT Control Smart Box Hydroponics',
    'desc' => 'The IoT Control Smart Box is a smart farming solution
            that integrates IoT technology to automate hydroponic cultivation. 
            Through an integrated control application, this system enables real-time 
            and remote monitoring of environmental parameters, ensuring nutrient 
            stability and optimal plant conditions, while minimizing the risk of 
            crop failure due to manual negligence.',
    'tech' => ['Figma'],
    'role' => 'System Analyst & UI Designer',
    'platform' => 'IoT Dashboard & Mobile App',
    'image' => '/assets/project-iot.jpg',
    'challenge' => 'The main challenges in conventional hydroponic cultivation systems 
                    are the difficulty of consistently maintaining stable environmental parameters and 
                    limited access to remote monitoring which often leads to crop failure due to slow 
                    responses to changes in nutritional conditions or the plants environment.',
    'solution' => 'As a solution, the IoT Control Smart Box Hydroponics was developed which 
                    integrates an IoT-based control application for real-time monitoring, allowing users 
                    to monitor and control the hydroponic ecosystem precisely and automatically through 
                    smart devices to ensure optimal plant growth efficiency.',
    'gallery' => ['/assets/iot-process-1.png', '/assets/iot-process-2.png']
],
    ];

    // Cek apakah slug ada di daftar, jika tidak kasih error 404
    if (!array_key_exists($slug, $allProjects)) {
        abort(404);
    }

    return Inertia::render('ProjectDetail', [
        'project' => $allProjects[$slug]
    ]);
});


Route::get('/projects', function () {
    // Data yang sama dengan yang ada di Home, tapi dalam bentuk array list
    $projects = [
        [
            'title' => 'SIM Padepokan Pencak Silat Laskar Panglipur',
            'desc' => 'SIM Laskar Panglipur is a modern Management Information 
            System that digitizes the administration of pencak silat organizations 
            through Laravel and React.js architecture. This project transforms 
            conventional data management into a centralized system equipped with 
            an Analytics Dashboard and a responsive interface from Tailwind CSS, 
            thus creating operational efficiency and accurate member data that can 
            be accessed anytime in real-time.',
            'image' => '/assets/project-sim.jpg',
            'link' => '/projects/sim-padepokan',
            'tech' => ['Laravel', 'React', 'Figma']
        ],
        [
            'title' => 'E-Learning Foreign Languages App Spikoo',
            'desc' => 'Spikoo is an innovative English learning platform
             designed to break down psychological barriers like lack 
             of confidence and limited vocabulary. By integrating Design 
             Thinking methods and System Usability Scale (SUS) evaluation, 
             the app offers an intuitive interface and adaptive learning experience, 
             enabling users to improve their speaking skills through effective digital 
             interactions to compete globally.',
            'image' => '/assets/project-spikoo.jpg',
            'link' => '/projects/spikoo',
            'tech' => ['Figma']
        ],
        [
            'title' => 'IoT Control Smart Box Hydroponics',
            'desc' => 'The IoT Control Smart Box is a smart farming solution
            that integrates IoT technology to automate hydroponic cultivation. 
            Through an integrated control application, this system enables real-time 
            and remote monitoring of environmental parameters, ensuring nutrient 
            stability and optimal plant conditions, while minimizing the risk of 
            crop failure due to manual negligence.',
            'image' => '/assets/project-iot.jpg',
            'link' => '/projects/iot-hydroponic',
            'tech' => ['Figma']
        ],
    ];

    return Inertia::render('Projects', [
        'projects' => $projects
    ]);
});

// Route bawaan Breeze (Biarkan saja untuk keperluan login nanti)
require __DIR__.'/auth.php';