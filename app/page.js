import Image from "next/image";
import Landing from "./ui/landing";
import Theme from "./ui/theme";
import History from "./ui/history";
import Timeline from "./ui/timeline";

export default function Home() {
  return (
    <main>
      <Landing />
      <Theme />
      <Timeline />
      <History />
    </main>
  );}
