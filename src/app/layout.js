import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
// import Navbar from "@/components/Navbar";
// import TopNav from "@/components/TopNav";
// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ChatbotUi from "@/app/features/chatbot/ChatbotUi";
import { dbConnect } from "../lib/mongo";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <StairTransition />
        <PageTransition>
          {children}
          <ChatbotUi />
        </PageTransition>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
