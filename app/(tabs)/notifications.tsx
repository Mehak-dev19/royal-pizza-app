import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ZOMATO_RED = "#E23744";
const TEXT_DARK = "#1C1C1C";
const TEXT_LIGHT = "#7A7A7A";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  unread?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
};

const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "Order placed",
    message: "Your order has been successfully placed.",
    time: "2 min ago",
    unread: true,
    icon: "checkmark-circle",
  },
  {
    id: "2",
    title: "Food is being prepared",
    message: "The restaurant has started preparing your food.",
    time: "10 min ago",
    unread: true,
    icon: "restaurant",
  },
  {
    id: "3",
    title: "Out for delivery",
    message: "Your rider is on the way 🚴",
    time: "25 min ago",
    icon: "bicycle",
  },
  {
    id: "4",
    title: "Delivered",
    message: "Hope you enjoyed your meal 😋",
    time: "1 hr ago",
    icon: "home",
  },
];

export default function NotificationsScreen() {
  const renderItem = ({ item }: { item: Notification }) => (
    <View style={[styles.card, item.unread && { backgroundColor: "#FFF5F5" }]}>
      <View style={styles.iconWrap}>
        <Ionicons name={item.icon} size={22} color={ZOMATO_RED} />
      </View>

      <View style={styles.textWrap}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        <Text style={styles.message}>{item.message}</Text>
      </View>

      {item.unread && <View style={styles.unreadDot} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  header: {
    fontSize: 26,
    fontWeight: "800",
    color: TEXT_DARK,
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#F9F9F9",
    marginBottom: 12,
    alignItems: "center",
    position: "relative",
  },
  iconWrap: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#FFECEC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textWrap: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: TEXT_DARK,
  },
  message: {
    fontSize: 13,
    color: TEXT_LIGHT,
    marginTop: 4,
    lineHeight: 18,
  },
  time: {
    fontSize: 11,
    color: "#999",
  },
  unreadDot: {
    position: "absolute",
    top: 12,
    right: 12,
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: ZOMATO_RED,
  },
});
