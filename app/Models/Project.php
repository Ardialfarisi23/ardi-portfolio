<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    // Mass assignment: Kolom yang boleh diisi secara massal
    protected $fillable = [
    'title', 
    'short_desc', 
    'full_desc', 
    'image',
    'tech_stack' // Tambahkan ini
];
}