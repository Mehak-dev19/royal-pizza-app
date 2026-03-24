import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type UserData = {
  name?: string;
  phone?: string;
  email?: string;
};

export default function ProfileScreen() {
  const [user, setUser] = useState<UserData>({});

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userSession");
    await AsyncStorage.removeItem("user");

    router.replace({
      pathname: "/(auth)/Login",
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={36} color="#fff" />
        </View>

        <View>
          <Text style={styles.name}>{user.name || "Guest User"}</Text>
          <Text style={styles.phone}>
            {user.phone || user.email || "No contact info"}
          </Text>
        </View>
      </View>

      {/* Orders / Address / Favourites */}
      <View style={styles.section}>
        <ProfileItem
          icon="receipt-outline"
          title="Your Orders"
          onPress={() => router.push({ pathname: "/profile/orders" })}
        />
        <ProfileItem
          icon="location-outline"
          title="Saved Addresses"
          onPress={() => router.push({ pathname: "/profile/addresses" })}
        />
        <ProfileItem icon="heart-outline" title="Favourites" />
      </View>

      {/* Payments / Notifications / Help */}
      <View style={styles.section}>
        <ProfileItem
          icon="card-outline"
          title="Payments & Refunds"
          onPress={() => router.push({ pathname: "/profile/payments" })}
        />
        <ProfileItem
          icon="notifications-outline"
          title="Notifications"
          onPress={() => router.push({ pathname: "/notifications" })}
        />
        <ProfileItem
          icon="help-circle-outline"
          title="Help & Support"
          onPress={() => router.push({ pathname: "/profile/help" })}
        />
      </View>

      {/* Logout */}
      <View style={styles.section}>
        <ProfileItem
          icon="log-out-outline"
          title="Logout"
          danger
          onPress={handleLogout}
        />
      </View>
    </ScrollView>
  );
}

/* ---------- ITEM ---------- */

function ProfileItem({
  icon,
  title,
  danger,
  onPress,
}: {
  icon: any;
  title: string;
  danger?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.row}>
        <Ionicons name={icon} size={22} color={danger ? "#E23744" : "#333"} />
        <Text style={[styles.itemText, danger && { color: "#E23744" }]}>
          {title}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#999" />
    </TouchableOpacity>
  );
}

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F6F6" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E23744",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  name: { fontSize: 18, fontWeight: "700" },
  phone: { fontSize: 14, color: "#666", marginTop: 2 },
  section: { backgroundColor: "#fff", marginBottom: 12 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  itemText: { fontSize: 15, color: "#333", fontWeight: "500" },
});
