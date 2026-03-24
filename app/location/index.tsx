import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LocationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose delivery location</Text>
      <Text style={styles.subtitle}>
        We need your location to show the menu 🍕
      </Text>

      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() => router.push("/location/manual")}
      >
        <Text style={styles.btnText}>Enter address manually</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 8,
  },
  subtitle: {
    color: "#666",
    marginBottom: 24,
  },
  btnPrimary: {
    height: 54,
    backgroundColor: "#E24F4F",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
