import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { IMAGES } from "@/constants/images";

export default function HomeScreen() {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const loadName = async () => {
      const name = await AsyncStorage.getItem("username");
      if (name) setUsername(name);
    };
    loadName();
  }, []);

  const categories = [
    { label: "Pizza", icon: "🍕", value: "pizza" },
    { label: "Wings", icon: "🍗", value: "wings" },
    { label: "Salads", icon: "🥗", value: "salads" },
    { label: "Subs", icon: "🥪", value: "subs" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.locationBox}
          onPress={() => router.push("/location")}
        >
          <Ionicons name="location-outline" size={18} color="#E24F4F" />
          <Text style={styles.locationText}>Select Location</Text>
          <Ionicons name="chevron-down" size={16} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bell}
          onPress={() => router.push("./notifications")}
        >
          <Ionicons name="notifications-outline" size={22} />
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>

      {/* GREETING */}
      <Text style={styles.hello}>Hello {username} 👋</Text>
      <Text style={styles.subText}>What are you craving today?</Text>

      {/* OFFER BANNER – WEBSITE MATCHED */}
      <View style={styles.offerCard}>
        <Text style={styles.offerTitle}>🔥 10% OFF</Text>
        <Text style={styles.offerSub}>Online orders only</Text>
        <Text style={styles.offerCode}>
          Use Code: <Text style={{ fontWeight: "800" }}>ONLINE10</Text>
        </Text>

        <TouchableOpacity
          style={styles.orderBtn}
          onPress={() => router.push("/(tabs)/menu")}
        >
          <Text style={styles.orderBtnText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>

      {/* CATEGORIES */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={cat.value}
            style={[styles.category, index === 0 && styles.activeCategory]}
            onPress={() =>
              router.push({
                pathname: "/(tabs)/menu",
                params: { category: cat.value },
              })
            }
          >
            <Text
              style={[styles.categoryText, index === 0 && { color: "#fff" }]}
            >
              {cat.icon} {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* BEST PICKS */}
      <Text style={styles.sectionTitle}>Best Picks 🔥</Text>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Image source={IMAGES.worksPizza} style={styles.cardImage} />
          <Text style={styles.cardTitle}>The Works Pizza</Text>
          <Text style={styles.price}>$13.99</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={IMAGES.jumboWings} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Jumbo Wings</Text>
          <Text style={styles.price}>$8.99</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* HOURS */}
      <View style={styles.hours}>
        <Ionicons name="time-outline" size={16} />
        <Text style={styles.hoursText}>Open Today: 10:00 AM – 9:00 PM</Text>
      </View>

      {/* VIEW MENU */}
      <TouchableOpacity
        style={styles.fullMenu}
        onPress={() => router.push("/(tabs)/menu")}
      >
        <Text style={styles.fullMenuText}>VIEW FULL MENU</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  locationText: { marginHorizontal: 6, fontWeight: "600" },

  bell: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 20,
  },
  dot: {
    position: "absolute",
    right: 8,
    top: 8,
    height: 8,
    width: 8,
    backgroundColor: "red",
    borderRadius: 4,
  },

  hello: { fontSize: 26, fontWeight: "800", marginTop: 16 },
  subText: { color: "#777", marginBottom: 14 },

  offerCard: {
    backgroundColor: "#D32F2F",
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
  },
  offerTitle: { color: "#fff", fontSize: 24, fontWeight: "800" },
  offerSub: { color: "#fff", marginVertical: 4 },
  offerCode: { color: "#fff", marginBottom: 10 },
  orderBtn: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  orderBtnText: { color: "#D32F2F", fontWeight: "800" },

  category: {
    backgroundColor: "#F1F3F6",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 20,
  },
  activeCategory: { backgroundColor: "#E24F4F" },
  categoryText: { fontWeight: "600" },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },

  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#F9F9F9",
    borderRadius: 16,
    padding: 10,
  },
  cardImage: { width: "100%", height: 120, borderRadius: 14 },
  cardTitle: { fontWeight: "700", marginTop: 6 },
  price: { color: "#E24F4F", fontWeight: "700" },
  addBtn: {
    backgroundColor: "#E24F4F",
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 6,
  },
  addBtnText: { color: "#fff", fontWeight: "700" },

  hours: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    gap: 6,
  },
  hoursText: { color: "#555" },

  fullMenu: {
    backgroundColor: "#E24F4F",
    height: 56,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 22,
  },
  fullMenuText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
});
