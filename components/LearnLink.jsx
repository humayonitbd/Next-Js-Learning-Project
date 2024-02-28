import Link from "next/link";

export default function LearnLink() {
    const id = 5;
  return (
    <>
    <Link href="/admin/dashboard/" >Go to Admin Dashbourd</Link> <br />
    <Link href={`/users/profile/${id}`} >Go to Profile</Link>
    </>
  )
}
