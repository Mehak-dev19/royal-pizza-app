import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { allToppings, products } from "../data/products";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const item = products.find((p) => p.id === id);

  // State for toppings
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  if (!item) {
    return (
      <View style={styles.center}>
        <Text>Item not found!</Text>
      </View>
    );
  }

  const toggleTopping = (topping: string) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((t) => t !== topping)
        : [...prev, topping],
    );
  };

  // Base price + $1.50 per extra topping
  const totalPrice = item.price + selectedToppings.length * 1.5;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen
        options={{
          title: item.name,
          headerTitleStyle: { fontWeight: "bold" },
          headerShadowVisible: false,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </View>

          <View style={styles.badgeContainer}>
            <Text style={styles.categoryBadge}>{item.category}</Text>
          </View>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.divider} />

          {/* CUSTOMIZATION SECTION - Only for Pizza/Subs */}
          {(item.category === "Pizza" || item.category === "Subs") && (
            <>
              <Text style={styles.sectionTitle}>
                Customize Your {item.category}
              </Text>
              <Text style={styles.subTitle}>
                Add Extra Toppings (+$1.50 each)
              </Text>

              <View style={styles.toppingGrid}>
                {allToppings.map((topping) => (
                  <TouchableOpacity
                    key={topping}
                    onPress={() => toggleTopping(topping)}
                    style={[
                      styles.toppingBadge,
                      selectedToppings.includes(topping) && styles.activeBadge,
                    ]}
                  >
                    <Text
                      style={[
                        styles.toppingText,
                        selectedToppings.includes(topping) && styles.activeText,
                      ]}
                    >
                      {topping}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          {/* PASTA/SIDES logic can go here if needed */}
          <View style={{ height: 120 }} />
        </View>
      </ScrollView>

      {/* STICKY FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.mainBtn} activeOpacity={0.8}>
          <Text style={styles.btnText}>
            Add to Order - ${totalPrice.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: 320, resizeMode: "cover" },
  content: { padding: 20 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1a1a1a",
    flex: 1,
    marginRight: 10,
  },
  price: { fontSize: 22, fontWeight: "700", color: "#d32f2f" },
  badgeContainer: { marginTop: 8, marginBottom: 15 },
  categoryBadge: {
    backgroundColor: "#f0f0f0",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: "700",
    color: "#666",
    textTransform: "uppercase",
  },
  description: { fontSize: 16, color: "#444", lineHeight: 24 },
  divider: { height: 1, backgroundColor: "#eee", marginVertical: 25 },
  sectionTitle: { fontSize: 19, fontWeight: "700", color: "#222" },
  subTitle: { fontSize: 14, color: "#999", marginBottom: 15 },
  toppingGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  toppingBadge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  activeBadge: { backgroundColor: "#d32f2f", borderColor: "#d32f2f" },
  toppingText: { color: "#555", fontSize: 13, fontWeight: "500" },
  activeText: { color: "#fff", fontWeight: "bold" },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  mainBtn: {
    backgroundColor: "#111",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 17, fontWeight: "700" },
});
