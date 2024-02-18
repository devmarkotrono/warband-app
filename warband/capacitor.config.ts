import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.warband.app',
  appName: 'warband',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
