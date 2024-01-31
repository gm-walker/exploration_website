import Hero from "@/components/hero";
import Image from "next/image";


export default function Home() {
  return (
    <main id="intro"className="flex m-8 max-w-full justify-center text-center">
      <div className="">
        <h1 className="text-3xl font-extrabold text-center tracking-widest leading-relaxed">Welcome to My Website</h1>
        <Hero />
      </div>
    </main>
  );
}
