import Image from "next/image";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Mission from "./components/Mission";
import Favorites from "./components/Favorites";
import Packs from "./components/Packs";
import Everlane from "./components/Everlane";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
       <Hero />
       <Category />
       <Mission />
       <Favorites />
       <Packs />
       <Everlane />
       <Footer />
    </div>
  );
}
