import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
                // Tambahkan baris di bawah ini jika error masih berlanjut
                // 'resources/js/Pages/Home.jsx', 
            ],
            refresh: true,
        }),
        react(),
    ],
});