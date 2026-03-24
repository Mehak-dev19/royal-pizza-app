import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  MENU_CONFIG,
  MENU_DATA,
  MenuCategory,
  MenuItem,
} from "../data/menuData";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ZOMATO_RED = "#E23744";
const TEXT_DARK = "#1C1C1C";
const TEXT_LIGHT = "#696969";

const MenuScreen = () => {
  // --- STEP 1: Cart State add kiya ---
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].category);

  const mainListRef = useRef<FlatList>(null);
  const categoryListRef = useRef<FlatList>(null);

  // --- STEP 2: Add to Cart Function ---
  const addToCart = (item: MenuItem) => {
    setCart((prev) => [...prev, item]);
    // Console mein check karne ke liye
    console.log(
      "🛒 Added to cart:",
      item.name,
      "| Total items:",
      cart.length + 1,
    );
  };

  const scrollToCategory = (index: number) => {
    setActiveCategory(MENU_DATA[index].category);
    mainListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: 100,
    });
  };

  const renderItem = ({ item: category }: { item: MenuCategory }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.categoryHeader}>{category.category}</Text>
      {category.note && (
        <Text style={styles.categoryNote}>{category.note}</Text>
      )}

      {category.items.map((dish: MenuItem) => (
        <View key={dish.id} style={styles.dishCard}>
          <View style={styles.dishInfo}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.dishPrice}>
              {MENU_CONFIG.currencySymbol}
              {dish.price.toFixed(2)}
            </Text>
            {dish.description && (
              <Text style={styles.dishDescription} numberOfLines={3}>
                {dish.description}
              </Text>
            )}
          </View>

          <View style={styles.imageContainer}>
            {dish.image ? (
              <Image source={dish.image} style={styles.dishImage} />
            ) : (
              <View style={styles.placeholderImage}>
                <Text style={{ color: "#ccc", fontSize: 10 }}>Royal Pizza</Text>
              </View>
            )}

            {/* --- STEP 3: Button ko onPress se connect kiya --- */}
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addToCart(dish)}
            >
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View style={styles.sectionDivider} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>The Royal Pizza</Text>
        <Text style={styles.headerSubtitle}>Delivery • 30 mins</Text>
      </View>

      <View style={styles.tabBar}>
        <FlatList
          ref={categoryListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={MENU_DATA}
          keyExtractor={(item) => item.category}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => scrollToCategory(index)}
              style={[
                styles.tabItem,
                activeCategory === item.category && styles.activeTabItem,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeCategory === item.category && styles.activeTabText,
                ]}
              >
                {item.category}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        ref={mainListRef}
        data={MENU_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.category}
        contentContainerStyle={styles.listContent}
        onScrollToIndexFailed={() => {}}
      />

      {/* --- STEP 4: (Optional) Cart Summary Bar --- */}
      {cart.length > 0 && (
        <View style={styles.cartBar}>
          <Text style={styles.cartBarText}>
            {cart.length} Item{cart.length > 1 ? "s" : ""} added
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewCartText}>View Cart 🛒</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... tumhare purane styles yahan rahenge ...
  // Niche ye naye styles add kar dena:
  cartBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: ZOMATO_RED,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    elevation: 5,
  },
  cartBarText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
  viewCartText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 16,
  },
  // Copy-paste your existing styles below this
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: { padding: 16, backgroundColor: "#fff" },
  headerTitle: { fontSize: 24, fontWeight: "800", color: TEXT_DARK },
  headerSubtitle: { fontSize: 14, color: TEXT_LIGHT, marginTop: 2 },
  tabBar: {
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    backgroundColor: "#FFF",
  },
  tabItem: { paddingHorizontal: 16, paddingVertical: 12, marginRight: 8 },
  activeTabItem: { borderBottomWidth: 3, borderBottomColor: ZOMATO_RED },
  tabText: { fontSize: 15, fontWeight: "600", color: TEXT_LIGHT },
  activeTabText: { color: ZOMATO_RED },
  listContent: { paddingBottom: 100 },
  sectionContainer: { marginTop: 20 },
  categoryHeader: {
    fontSize: 20,
    fontWeight: "800",
    color: TEXT_DARK,
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  categoryNote: {
    fontSize: 12,
    color: ZOMATO_RED,
    paddingHorizontal: 16,
    marginBottom: 10,
    fontStyle: "italic",
  },
  dishCard: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  dishInfo: { flex: 1, paddingRight: 10 },
  dishName: {
    fontSize: 17,
    fontWeight: "700",
    color: TEXT_DARK,
    marginBottom: 4,
  },
  dishPrice: {
    fontSize: 15,
    fontWeight: "600",
    color: "#444",
    marginBottom: 8,
  },
  dishDescription: { fontSize: 13, color: TEXT_LIGHT, lineHeight: 18 },
  imageContainer: { width: 110, height: 110, position: "relative" },
  dishImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
  },
  placeholderImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  addButton: {
    position: "absolute",
    bottom: -10,
    alignSelf: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 24,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: ZOMATO_RED,
    elevation: 3,
  },
  addButtonText: { color: ZOMATO_RED, fontWeight: "800", fontSize: 14 },
  sectionDivider: { height: 8, backgroundColor: "#F0F2F5", marginTop: 20 },
});

export default MenuScreen;
