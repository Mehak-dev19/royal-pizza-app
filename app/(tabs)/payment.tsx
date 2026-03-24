import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const ZOMATO_RED = "#E23744";

export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>

      {/* PAYMENT OPTIONS */}
      <TouchableOpacity style={styles.option}>
        <Ionicons name="card-outline" size={22} />
        <Text style={styles.optionText}>Credit / Debit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Ionicons name="logo-google" size={22} />
        <Text style={styles.optionText}>UPI / Google Pay</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Ionicons name="cash-outline" size={22} />
        <Text style={styles.optionText}>Cash on Delivery</Text>
      </TouchableOpacity>

      {/* PLACE ORDER */}
      <TouchableOpacity
        style={styles.placeOrder}
        onPress={() => router.push("./notifications")}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
  },
  placeOrder: {
    marginTop: "auto",
    backgroundColor: ZOMATO_RED,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  placeOrderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
});
