import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handlerbtn = ()=>{
        router.push("/color")
  }
 
  return (
    <main>
      <div className="mt-10">
        <h1>Md Humayon Forid</h1>
        <br />
        <Link href="/color"><button className="ml-10 btn bg-green-500 px-5 py-2 text-white text-lg">color</button></Link>
      </div>
      <div>
        <button onClick={handlerbtn}>Onclick btn</button>
      </div>
    </main>
  );
}
