import { db } from "@/firebase.config"
import { collection, getDocs } from "firebase/firestore"
import { NextResponse } from "next/server"

export async function GET(){
    const data = collection(db, 'blog')
    const querySnapShots = await getDocs(data)
    const blogs = querySnapShots.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    return NextResponse.json({blogs})
}