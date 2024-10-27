import Link from "next/link";
export default function Home () {
  return (
    <div>
<ul className="flex gap-10 bg-yellow-200">

<li> <Link href="/About">About</Link></li>
<li> <Link href="/Contact-Us">Contact-Us</Link></li>
<li> <Link href="/Login">Login</Link></li>
<li> <Link href="/Sign-up">Sign-up</Link></li>

</ul>
</div>

  

);
};
