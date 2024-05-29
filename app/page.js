
import Landing from "./ui/landing";
import Theme from "./ui/theme";
import History from "./ui/history";
import Timeline from "./ui/timeline";
import Faq from "./ui/faq";
import Judges from "./ui/judges";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import "./main.css"
import EnterContest from "./ui/entercontest";


// Images https://imgur.com/a/ctjRBeR
// https://imgur.com/a/rVDdZ1a

// https://imgur.com/a/EkQHkU0

// Image updated on
// <Navbar />
// <Landing /> YES
// <Theme /> YES (Other than webg)
// <Judges /> YES
// <Timeline /> YES
// <History /> YES
// <Faq /> 
// <Footer /> YES
export default function Home() {
  return (
    <main className="mainbkgrd">
      <Navbar />
      <Landing />
      <Theme />
      <EnterContest />
      <Timeline />
      <Judges />
      <History /> 
      <Faq />
      <Footer />
    </main>
  );}
