import Link from "next/link";

export default function Home() {
 
  return (
    <main>
      <div className="mt-10">
        <h1>Md Humayon Forid</h1>
        <br />
        <Link href="/color"><button className="ml-10 btn bg-green-500 px-5 py-2 text-white text-lg">color</button></Link>
      </div>
    </main>
  );
}
