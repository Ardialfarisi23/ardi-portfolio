<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
{
    \App\Models\Project::create([
        'title' => 'E-Commerce Website',
        'short_desc' => 'Membangun toko online dengan React dan Laravel.',
        'full_desc' => 'Ini adalah proyek besar pertama saya yang menggunakan sistem pembayaran terintegrasi.',
        'image' => 'project1.jpg',
        'tech_stack' => 'Laravel, React, Tailwind, MySQL', // Tambahkan data ini
    ]);

    \App\Models\Project::create([
        'title' => 'Aplikasi Manajemen Tugas',
        'short_desc' => 'Aplikasi to-do list dan manajemen proyek tim.',
        'full_desc' => 'Proyek ini berfokus pada kolaborasi tim secara real-time dengan antarmuka yang interaktif.',
        'image' => 'project2.jpg',
        'tech_stack' => 'Laravel, React, Inertia, Tailwind',
    ]);
}
}
