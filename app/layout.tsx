import "../styles/globals.css";
import Navbar from "./components/navbar/navbar";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Beer",
  description: "Your favorite beer on one page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.className}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
