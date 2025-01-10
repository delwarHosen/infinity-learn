import Image from "next/image";
import Header from "./_components/Header/Header";
import Banner from "./_components/Header/Banner";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}
