import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex flex-row *:align-center justify-around gap-9 bg-zinc-700/50 p-2 m-3 rounded-xl *:rounded-xl *:p-1 *:m-1 *:text-zinc-400">
            <Link 
            href="" 
            className="
                flex-none
                justify-center 
                hover:text-zinc-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notebook"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/></svg>
            </Link>
            <Link href="/" className="
                tracking-widest
                hover:text-zinc-200">
            Exploration</Link>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></button>        
            
        </nav>
    );
}