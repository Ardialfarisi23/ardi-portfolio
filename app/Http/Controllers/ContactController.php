<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        Mail::raw("Pesan baru dari: {$data['name']} ({$data['email']})\n\nIsi Pesan:\n{$data['message']}", function ($message) use ($data) {
            $message->to('ardialfarisi27@gmail.com')
                    ->subject('New Portfolio Message from ' . $data['name']);
        });

        return back()->with('success', 'Pesan berhasil dikirim!');
    }
}