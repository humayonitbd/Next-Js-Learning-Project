
async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}

export default async function LearnDataFetching() {
    const data = await getData();
    console.log("data",data)
  return (
    <div>
        {
            data?.map((post)=>(
                <div key={post.id} className="bg-green-200 mb-10 p-3">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
  )
}
