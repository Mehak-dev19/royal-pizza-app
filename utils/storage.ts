import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_KEY = "@royalpizza_auth";
const NAME_KEY = "@royalpizza_name";

// ✅ Save token
export async function setAuthToken(token: string) {
  try {
    await AsyncStorage.setItem(AUTH_KEY, token);
  } catch (e) {
    console.warn("Failed saving auth token", e);
  }
}

// ✅ Get token
export async function getAuthToken() {
  try {
    return await AsyncStorage.getItem(AUTH_KEY);
  } catch (e) {
    console.warn("Failed reading auth token", e);
    return null;
  }
}

// ✅ Clear token (logout)
export async function clearAuthToken() {
  try {
    await AsyncStorage.removeItem(AUTH_KEY);
  } catch (e) {
    console.warn("Failed clearing auth token", e);
  }
}

// (Optional – later use)
export async function setUserName(name: string) {
  await AsyncStorage.setItem(NAME_KEY, name);
}

export async function getUserName() {
  return await AsyncStorage.getItem(NAME_KEY);
}
