import Image from "next/image";
import Hero from "./hero";
import Info from "./info";
import NewsLetter from "./newsLetter";

export default function Home() {
  return (
    <main className="">
     <Hero/>
     <Info/>
     <NewsLetter/>

    </main>
  );
}
