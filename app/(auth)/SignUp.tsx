import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { account } from "../../lib/appwrite";

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const onSignUp = async () => {
    setEmailError("");
    setGeneralError("");

    if (!name || !email || !password || !confirm) {
      setGeneralError("Please fill all fields");
      return;
    }

    if (password !== confirm) {
      setGeneralError("Passwords do not match");
      return;
    }

    if (password.length < 8 || !/\d/.test(password)) {
      setGeneralError(
        "Password must be at least 8 characters and contain a number"
      );
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ CREATE USER
      await account.create("unique()", email.trim(), password, name.trim());

      // 2️⃣ CREATE SESSION (CRITICAL FOR MOBILE)
      await account.createEmailPasswordSession(email.trim(), password);

      // 3️⃣ SEND VERIFICATION (AFTER SESSION)
      if (Platform.OS !== "web") {
        await account.createVerification("royalpizzanew://verify");
      }

      // 4️⃣ NAVIGATE
      router.replace({
        pathname: "/(auth)/verify",
        params: { email: email.trim() },
      });
    } catch (err: any) {
      console.log("SIGNUP ERROR:", err);

      const msg = String(err?.message || "").toLowerCase();

      if (msg.includes("already") || msg.includes("exists")) {
        setEmailError("The email you entered is already registered");
      } else {
        setGeneralError(err?.message || "Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Create Account</Text>

      {/* Name */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
      />

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        onChangeText={(t) => {
          setEmail(t);
          setEmailError("");
        }}
      />

      {emailError ? <Text style={styles.inlineError}>{emailError}</Text> : null}

      {/* Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.passwordInput}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#888"
          />
        </Pressable>
      </View>

      <Text style={styles.passwordRule}>
        Password must be at least 8 characters and contain a number
      </Text>

      {/* Confirm Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirm}
          onChangeText={setConfirm}
          style={styles.passwordInput}
        />
        <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={20}
            color="#888"
          />
        </Pressable>
      </View>

      {generalError ? (
        <Text style={styles.generalError}>{generalError}</Text>
      ) : null}

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.cta}
        onPress={onSignUp}
        disabled={loading}
        activeOpacity={0.9}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.ctaText}>Sign Up</Text>
        )}
      </TouchableOpacity>

      {/* Login Link */}
      <TouchableOpacity
        style={{ marginTop: 14 }}
        onPress={() => router.replace("/(auth)/Login")}
      >
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#F1F3F6",
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  passwordInput: {
    flex: 1,
    height: 52,
    fontSize: 16,
  },
  passwordRule: {
    fontSize: 12,
    color: "#999",
    marginBottom: 10,
    marginLeft: 4,
  },
  inlineError: {
    color: "#999",
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 4,
  },
  generalError: {
    color: "#E24F4F",
    fontSize: 13,
    marginBottom: 12,
    textAlign: "center",
  },
  cta: {
    height: 54,
    backgroundColor: "#E24F4F",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  loginText: {
    textAlign: "center",
    color: "#777",
  },
  loginLink: {
    color: "#E24F4F",
    fontWeight: "700",
  },
});
