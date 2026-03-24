import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type PaymentMethod = {
  id: string;
  title: string;
  subtitle?: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "card",
    title: "Credit / Debit Card",
    subtitle: "Visa, Mastercard, Amex",
    icon: "card-outline",
  },
  {
    id: "apple-pay",
    title: "Apple Pay",
    subtitle: "Fast & secure",
    icon: "logo-apple",
  },
  {
    id: "google-pay",
    title: "Google Pay",
    subtitle: "Quick checkout",
    icon: "logo-google",
  },
  {
    id: "cash",
    title: "Cash on Delivery",
    subtitle: "Pay when order arrives",
    icon: "cash-outline",
  },
];

export default function PaymentsScreen() {
  const [selected, setSelected] = useState<string>("card");

  const renderItem = ({ item }: { item: PaymentMethod }) => {
    const isActive = selected === item.id;

    return (
      <TouchableOpacity
        style={[styles.card, isActive && styles.activeCard]}
        onPress={() => setSelected(item.id)}
      >
        <View style={styles.row}>
          <Ionicons
            name={item.icon}
            size={22}
            color={isActive ? "#E23744" : "#555"}
          />

          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.title}>{item.title}</Text>
            {item.subtitle && (
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            )}
          </View>

          {isActive && (
            <Ionicons name="checkmark-circle" size={22} color="#E23744" />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Methods</Text>

      <FlatList
        data={PAYMENT_METHODS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueBtn}>
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1C1C1C",
    padding: 16,
    backgroundColor: "#FFF",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
  },
  activeCard: {
    borderWidth: 1,
    borderColor: "#E23744",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1C1C1C",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  continueBtn: {
    backgroundColor: "#E23744",
    margin: 16,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  continueText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
