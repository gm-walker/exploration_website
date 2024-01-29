import Hero from "@/components/hero";
import Image from "next/image";


export default function Home() {
  return (
    <main id="intro"className="flex m-8">
      <div className="">
        <h1 className="text-3xl font-extrabold text-center tracking-widest leading-relaxed">Welcome to My Website</h1>
        <Hero />
      </div>
      <div id="about" className="">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae quos vel beatae eum saepe laudantium enim ad temporibus, tempore eveniet optio perspiciatis. Odio suscipit dignissimos nesciunt vero provident alias.</p>
      </div>
    </main>
  );
}
