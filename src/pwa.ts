/// <reference types="vite-plugin-pwa/client" />
import { registerSW } from 'virtual:pwa-register';

registerSW({
    immediate: true,
    onRegisteredSW(swScriptUrl: any) {
        console.log('SW registered at', swScriptUrl);
    },
    onOfflineReady() {
        console.log('App is ready offline');
    },
});