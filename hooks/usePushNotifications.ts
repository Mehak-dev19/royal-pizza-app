import Constants from "expo-constants";
import * as Device from "expo-device";
import { useEffect } from "react";

// ❌ DO NOT import expo-notifications in Expo Go
// import * as Notifications from "expo-notifications";

export function usePushNotifications(userId: string) {
  useEffect(() => {
    // 🚫 Disable push notifications in Expo Go
    if (__DEV__ && Constants.appOwnership === "expo") {
      console.log("Push notifications disabled in Expo Go");
      return;
    }

    const setup = async () => {
      try {
        if (!Device.isDevice) return;

        // ⛔ Will be enabled later in dev build
      } catch (e: any) {
        console.log("Notification error:", e.message);
      }
    };

    setup();
  }, [userId]);
}
