// lib/auth.ts
import { account } from "./appwrite";

// CREATE ACCOUNT
export async function register(email: string, password: string, name: string) {
  try {
    return await (account as any).create("unique()", email, password, name);
  } catch (err: any) {
    console.log("REGISTER ERROR →", err);
    throw err;
  }
}

// LOGIN / CREATE SESSION
export async function createSession(email: string, password: string) {
  try {
    // Appwrite sometimes uses createEmailSession, sometimes createSession.
    try {
      return await (account as any).createEmailSession(email, password);
    } catch (e1) {
      return await (account as any).createSession(email, password);
    }
  } catch (err: any) {
    console.log("SESSION ERROR →", err);
    throw err;
  }
}
