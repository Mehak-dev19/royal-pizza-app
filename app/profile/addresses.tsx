import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Address = {
  id: string;
  label: string;
  address: string;
};

export default function AddressesScreen() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      label: "Home",
      address: "123 Main Street, Baltimore, MD 21201",
    },
    {
      id: "2",
      label: "Work",
      address: "456 Office Ave, Baltimore, MD 21202",
    },
  ]);

  const renderAddress = ({ item }: { item: Address }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ionicons name="location-outline" size={22} color="#E23744" />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity>
          <Text style={styles.actionText}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.actionText, { color: "#E23744" }]}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={renderAddress}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No saved addresses</Text>
        }
      />

      {/* Add Address Button */}
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add" size={22} color="#FFF" />
        <Text style={styles.addBtnText}>ADD NEW ADDRESS</Text>
      </TouchableOpacity>
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
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  label: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1C1C1C",
  },
  address: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
    lineHeight: 18,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    gap: 20,
  },
  actionText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#555",
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E23744",
    paddingVertical: 14,
    margin: 16,
    borderRadius: 12,
    gap: 8,
  },
  addBtnText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 15,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 16,
    color: "#999",
  },
});
