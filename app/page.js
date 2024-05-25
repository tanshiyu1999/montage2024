import Image from "next/image";
import Landing from "./ui/landing";
import Theme from "./ui/theme";
import History from "./ui/history";
import Timeline from "./ui/timeline";
import Faq from "./ui/faq";
import Judges from "./ui/judges";
import { metadata } from "./layout";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import Tac from "./ui/tac";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Theme />
      <Judges />
      <Timeline />
      <History />
      <Faq />
      <Footer />
    </main>
  );}
