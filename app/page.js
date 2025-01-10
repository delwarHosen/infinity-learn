import Image from "next/image";
import Header from "./_components/Header/Header";
import Banner from "./_components/Header/Banner";
import About from "./_components/About";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <About></About>
    </div>
  );
}
