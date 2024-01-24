import Navbar from "@/components/navbar";
import Image from "next/image";
Navbar
export default function Home() {
  return (
    <main className="flex m-8">
      <div className="">
        <h1 className="text-3xl font-extrabold text-center tracking-widest leading-relaxed">Welcome to My Website</h1>
        <p className="leading-tight text-sm font-mono text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto, quo alias eveniet aperiam culpa ullam at praesentium repudiandae odio fuga dolor molestiae suscipit doloribus. Doloremque suscipit delectus nostrum soluta?</p>
      </div>
      <div className=""></div>
    </main>
  );
}
