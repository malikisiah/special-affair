import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import app from "../firebase";

import { NextResponse } from "next/server";
const firestore = getFirestore(app);

export async function GET() {
  const snapshot = await getDocs(collection(firestore, "users"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return NextResponse.json({ data });
}
