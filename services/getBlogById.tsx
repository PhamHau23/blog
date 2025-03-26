import { db } from "@/firebase.config"
import { doc, getDoc } from "firebase/firestore"

export async function getBlogById(id: string) {
    const docRef = doc(db, "blog", id)
    const docSnap = await getDoc(docRef)
  
    return { id: docSnap.id, ...docSnap.data()}
}