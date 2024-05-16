import Image from "next/image";
import Landing from "./ui/landing";
import Theme from "./ui/theme";
import History from "./ui/history";
import Timeline from "./ui/timeline";
import Faq from "./ui/faq";
import Judges from "./ui/judges";
import { metadata } from "./layout";



export default function Home() {
  return (
    <main>
      <Landing />
      <Theme />
      <Judges />
      <Timeline />
      <History />
      <Faq />
    </main>
  );}
