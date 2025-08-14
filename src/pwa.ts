/// <reference types="vite-plugin-pwa/client" />
import { registerSW } from 'virtual:pwa-register';

let deferredPrompt: BeforeInstallPromptEvent | null = null;

// Guard so this runs only in the browser
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    // Register service worker
    registerSW({
        immediate: true,
        onOfflineReady() {
            console.log('PWA ready to install and work offline.');
        },
    });

    // Listen for beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e: Event) => {
        e.preventDefault();
        deferredPrompt = e as BeforeInstallPromptEvent;

        // Show your custom install button
        const btn = document.getElementById('installBtn');
        if (btn) {
            btn.style.display = 'block';
            btn.addEventListener('click', async () => {
                btn.setAttribute('disabled', 'true'); // prevent multiple clicks
                if (!deferredPrompt) return;
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to install prompt: ${outcome}`);
                deferredPrompt = null;
            });
        }
    });
}

// Type definition for BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}