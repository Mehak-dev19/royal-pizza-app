import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { getAuthToken } from "../../utils/storage";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const checkFlow = async () => {
      try {
        const token = await getAuthToken();
        const locationDone = await AsyncStorage.getItem("locationDone");

        if (!token) {
          // 🆕 New user → Signup
          router.replace("/(auth)/SignUp");
        } else if (locationDone !== "true") {
          // Logged in → Location
          router.replace("/location");
        } else {
          // Logged in + location done
          router.replace("/(tabs)");
        }
      } catch {
        router.replace("/(auth)/SignUp");
      }
    };

    checkFlow();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#E24F4F" />
    </View>
  );
}
