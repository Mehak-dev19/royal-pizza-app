import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Verify() {
  const { email } = useLocalSearchParams<{ email: string }>();

  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(45);

  // ⏱ TIMER
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const onVerify = () => {
    // ⚠️ TEMP: skip verification
    router.replace("/(tabs)");
  };

  const onResend = () => {
    setTimer(45);
  };

  return (
    <View style={styles.container}>
      {/* CLOSE */}
      <TouchableOpacity style={styles.close} onPress={() => router.back()}>
        <Ionicons name="close" size={24} color="#E24F4F" />
      </TouchableOpacity>

      {/* TITLE */}
      <Text style={styles.title}>Enter secure code to verify</Text>

      {/* SUBTITLE */}
      <Text style={styles.subtitle}>
        Please enter the verification code sent to{"\n"}
        <Text style={styles.email}>{email}</Text>
      </Text>

      {/* OTP INPUT */}
      <View style={styles.otpBox}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" />
        <TextInput
          value={code}
          onChangeText={setCode}
          maxLength={4}
          keyboardType="number-pad"
          style={styles.otpInput}
          placeholder="••••"
        />
      </View>

      {/* TIMER */}
      <View style={styles.row}>
        <Text style={styles.timer}>Valid for {timer} seconds</Text>

        {timer === 0 && (
          <TouchableOpacity onPress={onResend}>
            <Text style={styles.resend}>Resend code</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* SUBMIT */}
      <TouchableOpacity
        style={[styles.btn, code.length < 4 && { opacity: 0.5 }]}
        disabled={code.length < 4}
        onPress={onVerify}
      >
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  close: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 12,
  },
  subtitle: {
    color: "#666",
    fontSize: 14,
    marginBottom: 24,
  },
  email: {
    color: "#E24F4F",
    fontWeight: "700",
  },
  otpBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 56,
    marginBottom: 14,
  },
  otpInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    letterSpacing: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  timer: {
    fontSize: 13,
    color: "#777",
  },
  resend: {
    fontSize: 13,
    color: "#E24F4F",
    fontWeight: "700",
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
