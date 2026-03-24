import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { useCart } from "../context/cartcontext";

const ZOMATO_RED = "#E23744";

export default function CheckoutScreen() {
  const { totalPrice } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* ADDRESS */}
      <Text style={styles.label}>Delivery Address</Text>
      <TextInput
        placeholder="House no, street, city"
        style={styles.input}
        multiline
      />

      {/* PHONE */}
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        style={styles.input}
      />

      {/* NOTES */}
      <Text style={styles.label}>Cooking Instructions</Text>
      <TextInput
        placeholder="Less spicy, extra cheese, etc."
        style={styles.input}
      />

      {/* PRICE */}
      <View style={styles.priceRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>${(totalPrice + 2).toFixed(2)}</Text>
      </View>

      {/* CONTINUE */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("./payment")}
      >
        <Text style={styles.buttonText}>Continue to Payment</Text>
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
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    marginTop: 6,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "800",
  },
  button: {
    backgroundColor: ZOMATO_RED,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});
