import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const colors = [
    {
      id:1,
      name:"button-1",
      number:'300'
    },
    {
      id:1,
      name:"button-2",
      number:'400'
    },
    {
      id:1,
      name:"button-3",
      number:'500'
    },
    {
      id:1,
      name:"button-4",
      number:'600'
    },
  ]
  return (
    <main>
      <div className="mt-10">
        <h1>Md Humayon Forid</h1>
        <hr />
        <hr />
        <div className="mt-10">
          {
            colors.map(color =><><button className={`btn bg-red-${color.number} mr-5 py-1 px-3 text-white rounded`}>{color.name}</button></>)
          }
        
        </div>
      </div>
    </main>
  );
}
