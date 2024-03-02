"use client";
import { useRouter } from "next/navigation";


export default function LearnUseRouter() {
    const router = useRouter();
    console.log("Router", router);
  return (
    <div>
        <h2>Use Router</h2>
        <button type="button" onClick={()=>router.push("/admin/dashboard")}>Go to Dashboard</button>
    </div>
  )
}
