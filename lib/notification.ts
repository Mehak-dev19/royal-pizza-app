// lib/notification.ts
import Constants from "expo-constants";

export const isPushSupported = Constants.appOwnership !== "expo"; // false in Expo Go

export async function registerForPushNotifications() {
  if (!isPushSupported) {
    console.log("Push notifications disabled in Expo Go");
    return null;
  }

  // 🔔 Real implementation later (dev build / APK)
  return null;
}
