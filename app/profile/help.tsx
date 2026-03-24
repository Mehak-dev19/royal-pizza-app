import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type HelpItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const HELP_OPTIONS: HelpItem[] = [
  {
    id: "orders",
    title: "Orders & Payments",
    subtitle: "Issues related to orders, refunds & payments",
    icon: "receipt-outline",
  },
  {
    id: "delivery",
    title: "Delivery Issues",
    subtitle: "Late delivery, wrong order, missing items",
    icon: "bicycle-outline",
  },
  {
    id: "account",
    title: "Account & Profile",
    subtitle: "Login, phone number, profile details",
    icon: "person-outline",
  },
  {
    id: "offers",
    title: "Offers & Discounts",
    subtitle: "Coupons, promotions & deals",
    icon: "pricetag-outline",
  },
  {
    id: "contact",
    title: "Contact Restaurant",
    subtitle: "Call or message Royal Pizza",
    icon: "call-outline",
  },
];

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Help & Support</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {HELP_OPTIONS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Ionicons name={item.icon} size={22} color="#E23744" />

            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        ))}

        {/* Contact Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Need immediate help?</Text>
          <Text style={styles.infoText}>
            Call Royal Pizza directly for urgent issues.
          </Text>

          <TouchableOpacity style={styles.callBtn}>
            <Ionicons name="call" size={18} color="#FFF" />
            <Text style={styles.callText}>CALL RESTAURANT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#FFF",
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1C1C1C",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
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
  infoBox: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    marginTop: 20,
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
    color: "#1C1C1C",
  },
  infoText: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 14,
  },
  callBtn: {
    flexDirection: "row",
    backgroundColor: "#E23744",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  callText: {
    color: "#FFF",
    fontWeight: "800",
    marginLeft: 8,
  },
});
