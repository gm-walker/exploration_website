import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex-auto gap-9 bg-zinc-700/50 p-5 m-5 rounded-xl *:rounded-xl *:p-3 *:mr-5 *:text-zinc-400  justify-around">
            <Link href="https://discord.com/" className="hover:text-zinc-200 hover:ring-zinc-500 hover:ring-2">Discord</Link>
            <Link href="https://github.com/gm-walker" className="hover:text-zinc-200 hover:ring-zinc-500/50 hover:ring-2">GitHub</Link>
            <Link href=""></Link>
        </nav>
    );
}