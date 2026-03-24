import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTitleStyle: { fontWeight: "700" },
        headerTintColor: "#000",
      }}
    >
      {/* Orders */}
      <Stack.Screen
        name="orders"
        options={{
          title: "Your Orders",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Addresses */}
      <Stack.Screen
        name="addresses"
        options={{
          title: "Saved Addresses",
        }}
      />

      {/* Payments */}
      <Stack.Screen
        name="payments"
        options={{
          title: "Payments",
        }}
      />

      {/* Help */}
      <Stack.Screen
        name="help"
        options={{
          title: "Help & Support",
        }}
      />
    </Stack>
  );
}
