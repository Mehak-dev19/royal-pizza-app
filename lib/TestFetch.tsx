import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { db, RID } from "../lib/appwrite";

export default function TestFetch() {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await db.listDocuments(RID.DB, RID.MENU);
        setItems(res.documents || []);
      } catch (err: any) {
        setError(err.message || JSON.stringify(err));
      }
    })();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      {error && <Text style={{ color: "red" }}>Error: {error}</Text>}
      {items.map((i) => (
        <View key={i.$id} style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{i.name}</Text>
          <Text>{i.description}</Text>
          <Text>₹{i.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
