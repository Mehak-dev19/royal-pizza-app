import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ResetPassword() {
  const router = useRouter();
  const { token } = useLocalSearchParams<{ token?: string }>();

  // ✅ SAFELY normalize token
  const resetToken = typeof token === "string" ? token : "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [validToken, setValidToken] = useState<boolean | null>(null);

  // 🔍 verify token once
  useEffect(() => {
    let mounted = true;

    async function verifyToken() {
      if (!resetToken) {
        if (mounted) setValidToken(false);
        return;
      }

      try {
        const res = await fetch(
          "https://your-backend.com/auth/verify-reset?token=" +
            encodeURIComponent(resetToken)
        );

        if (!mounted) return;
        setValidToken(res.ok);
      } catch {
        if (mounted) setValidToken(false);
      }
    }

    verifyToken();
    return () => {
      mounted = false;
    };
  }, [resetToken]);

  const onSubmit = async () => {
    if (!password || !confirm) {
      Alert.alert("Missing", "Please fill both password fields.");
      return;
    }

    if (password !== confirm) {
      Alert.alert("Mismatch", "Passwords do not match.");
      return;
    }

    if (!resetToken) {
      Alert.alert("Invalid link", "Reset link is missing or expired.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://your-backend.com/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: resetToken,
          password,
        }),
      });

      if (!res.ok) throw new Error("Reset failed");

      Alert.alert("Success", "Password updated. Please log in.");
      router.replace("/auth/Login" as any);
    } catch {
      Alert.alert("Error", "Unable to reset password. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ❌ Invalid token UI
  if (validToken === false) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Invalid reset link</Text>
        <Text style={styles.sub}>
          This reset link is invalid or expired. Please request a new one.
        </Text>

        <TouchableOpacity
          style={styles.cta}
          onPress={() => router.replace("/auth/Forgot" as any)}
        >
          <Text style={styles.ctaText}>Request new link</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ⏳ Verifying
  if (validToken === null) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text style={{ marginTop: 12 }}>Verifying reset link...</Text>
      </View>
    );
  }

  // ✅ Valid token UI
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <Text style={styles.title}>Set new password</Text>
      <Text style={styles.sub}>Enter a new password for your account.</Text>

      <TextInput
        style={styles.input}
        placeholder="New password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={styles.cta}
        onPress={onSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.ctaText}>Set new password</Text>
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111",
    textAlign: "center",
    marginBottom: 8,
  },
  sub: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 52,
    borderRadius: 8,
    backgroundColor: "#F1F3F6",
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 12,
  },
  cta: {
    backgroundColor: "#E24F4F",
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    paddingHorizontal: 20,
  },
  ctaText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
