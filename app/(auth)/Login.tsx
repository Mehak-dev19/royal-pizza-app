import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { account } from "../../lib/appwrite";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      /* 🧹 Clear old session */
      try {
        await account.deleteSession("current");
      } catch {}

      /* 🔐 Create session */
      await account.createEmailPasswordSession(
        email.trim().toLowerCase(),
        password
      );

      /* ✅ Go to app */
      router.replace("./(app)/location");
    } catch (err: any) {
      console.log("LOGIN ERROR:", err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.cta} onPress={onLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.ctaText}>Login</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 14 }}
        onPress={() => router.replace("/(auth)/SignUp")}
      >
        <Text style={styles.link}>
          Don’t have an account? <Text style={styles.linkBold}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

/* ✅ STYLES (THIS WAS MISSING) */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 52,
    borderRadius: 10,
    backgroundColor: "#F1F3F6",
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 12,
  },
  error: {
    color: "#E24F4F",
    textAlign: "center",
    marginBottom: 12,
  },
  cta: {
    height: 54,
    backgroundColor: "#E24F4F",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  link: {
    textAlign: "center",
    color: "#777",
  },
  linkBold: {
    color: "#E24F4F",
    fontWeight: "700",
  },
});
