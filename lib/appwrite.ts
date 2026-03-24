// app/lib/appwrite.ts
import { Account, Client, Databases, ID, Storage } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// ✅ DATABASE ID (VERY IMPORTANT)
export const DATABASE_ID = "database-68fa58fa00364aba880a";

// ✅ COLLECTION IDS
export const USERS_COLLECTION_ID = "users";
export const VERIFICATIONS_COLLECTION_ID = "verifications";
export const ORDERS_COLLECTION_ID = "orders";
export const MENU_COLLECTION_ID = "menu_items";

// ✅ VERY IMPORTANT
export { ID };

export default client;
