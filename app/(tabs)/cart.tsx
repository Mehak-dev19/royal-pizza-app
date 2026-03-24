import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/cartcontext";

const ZOMATO_RED = "#E23744";
const TEXT_DARK = "#1C1C1C";
const TEXT_LIGHT = "#696969";

export default function CartScreen() {
  const {
    items,
    totalItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="cart-outline" size={64} color="#ccc" />
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptySub}>Add items from the menu</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* CART ITEMS */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 160 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>

            {/* QTY CONTROLS */}
            <View style={styles.qtyBox}>
              <TouchableOpacity
                onPress={() =>
                  item.quantity === 1
                    ? removeItem(item.id)
                    : decreaseQty(item.id)
                }
              >
                <Ionicons
                  name={item.quantity === 1 ? "trash-outline" : "remove"}
                  size={18}
                  color={ZOMATO_RED}
                />
              </TouchableOpacity>

              <Text style={styles.qtyText}>{item.quantity}</Text>

              <TouchableOpacity onPress={() => increaseQty(item.id)}>
                <Ionicons name="add" size={18} color={ZOMATO_RED} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* BILL SUMMARY */}
      <View style={styles.billBox}>
        <View style={styles.billRow}>
          <Text style={styles.billText}>Item total</Text>
          <Text style={styles.billText}>${totalPrice.toFixed(2)}</Text>
        </View>

        <View style={styles.billRow}>
          <Text style={styles.billText}>Delivery fee</Text>
          <Text style={styles.billText}>$2.00</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.billRow}>
          <Text style={styles.grandTotal}>Grand total</Text>
          <Text style={styles.grandTotal}>${(totalPrice + 2).toFixed(2)}</Text>
        </View>
      </View>

      {/* CHECKOUT BAR */}
      <View style={styles.checkoutBar}>
        <View>
          <Text style={styles.checkoutItems}>{totalItems} items</Text>
          <Text style={styles.checkoutPrice}>
            ${(totalPrice + 2).toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  /* EMPTY */
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 12,
  },
  emptySub: {
    color: TEXT_LIGHT,
    marginTop: 4,
  },

  /* ITEM CARD */
  card: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    alignItems: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: TEXT_DARK,
  },
  itemPrice: {
    fontSize: 14,
    color: TEXT_LIGHT,
    marginTop: 4,
  },

  /* QTY */
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: ZOMATO_RED,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 12,
  },
  qtyText: {
    fontSize: 15,
    fontWeight: "700",
  },

  /* BILL */
  billBox: {
    backgroundColor: "#FAFAFA",
    padding: 16,
    marginTop: 10,
  },
  billRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  billText: {
    fontSize: 14,
    color: TEXT_LIGHT,
  },
  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 10,
  },
  grandTotal: {
    fontSize: 16,
    fontWeight: "800",
  },

  /* CHECKOUT */
  checkoutBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkoutItems: {
    fontSize: 13,
    color: TEXT_LIGHT,
  },
  checkoutPrice: {
    fontSize: 18,
    fontWeight: "800",
  },
  checkoutBtn: {
    backgroundColor: ZOMATO_RED,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  checkoutText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "800",
  },
});
