<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('projects', function (Blueprint $table) {
        $table->id();
        $table->string('title'); // Judul Proyek
        $table->text('short_desc'); // Untuk kartu depan
        $table->longText('full_desc'); // Untuk halaman detail
        $table->string('image'); // Path gambar thumbnail
        $table->string('logic_flow_img')->nullable(); // Diagram System Analyst
        $table->text('tech_stack')->nullable(); // Array teknologi (Laravel, React, dsb)
        $table->string('github_link')->nullable();
        $table->string('demo_link')->nullable();
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
