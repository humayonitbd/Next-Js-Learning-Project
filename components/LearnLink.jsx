import Link from "next/link";

export default function LearnLink() {
    const id = 2;
  return (
    <>
    <Link href="/admin/dashboard/" >Go to Admin Dashbourd</Link>
    <Link href={`/users/profile/${id}`} >Go to Profile</Link>
    </>
  )
}
