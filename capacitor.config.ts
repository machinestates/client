import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.machinestates.app',
  appName: 'Machine States',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
