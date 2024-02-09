import Image from "next/image";


export default function Home() {
  return (
    <main id="intro"className="flex m-8 max-w-full justify-center text-center">
      <div className="overflow-hidden">
        <h1 className="text-3xl font-extrabold text-center tracking-widest leading-relaxed">Welcome to My Website</h1>
        
        <div className="h-2/3">
        <img alt="Hero Image" src="https://images.unsplash.com/photo-1691084041747-9cc0ade8ceda?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%"/>
        </div>
      </div>
    </main>
  );
}
