import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ManualLocation() {
  const [address, setAddress] = useState("");

  const saveLocation = async () => {
    if (!address.trim()) {
      alert("Please enter your address");
      return;
    }

    await AsyncStorage.setItem("userLocation", address);
    await AsyncStorage.setItem("locationDone", "true");

    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter delivery address</Text>

      <TextInput
        style={styles.input}
        placeholder="House no, street, city"
        value={address}
        onChangeText={setAddress}
        multiline
      />

      <TouchableOpacity style={styles.btn} onPress={saveLocation}>
        <Text style={styles.btnText}>Continue</Text>
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
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 16,
  },
  input: {
    height: 100,
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 14,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  btn: {
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
