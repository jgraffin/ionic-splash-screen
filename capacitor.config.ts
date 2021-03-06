import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "ionic splash screen",
  webDir: "build",
  bundledWebRuntime: true,
  plugins: {
    SplashScreen: {
      launchShowDuration: 100000,
      launchAutoHide: true,
      backgroundColor: "#290707",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "inverse",
      iosSpinnerStyle: "small",
      spinnerColor: "#781DB9",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: false,
    },
  },
};

export default config;
