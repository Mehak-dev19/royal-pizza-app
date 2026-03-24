import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ORDERS = [
  {
    id: "ORD12345",
    restaurant: "The Royal Pizza",
    items: "2 × Works Pizza, 1 × Coke",
    total: 32.98,
    status: "Delivered",
    date: "24 Jan 2026",
  },
  {
    id: "ORD12346",
    restaurant: "The Royal Pizza",
    items: "1 × Buffalo Chicken Pizza",
    total: 14.99,
    status: "Delivered",
    date: "20 Jan 2026",
  },
];

export default function OrdersScreen() {
  const renderOrder = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.restaurant}>{item.restaurant}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>

      <Text style={styles.items}>{item.items}</Text>

      <View style={styles.rowBetween}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.total}>${item.total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.reorderBtn}>
        <Text style={styles.reorderText}>REORDER</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No orders yet 🍕</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurant: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1C",
  },
  status: {
    fontSize: 12,
    color: "#4CAF50",
    fontWeight: "600",
  },
  items: {
    marginTop: 8,
    fontSize: 13,
    color: "#555",
  },
  date: {
    marginTop: 12,
    fontSize: 12,
    color: "#888",
  },
  total: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "700",
    color: "#1C1C1C",
  },
  reorderBtn: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#E23744",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  reorderText: {
    color: "#E23744",
    fontWeight: "700",
    fontSize: 14,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 16,
    color: "#999",
  },
});
