import "../styles/globals.css";
import Navbar from "../src/components/navbar/navbar";
import { Playfair_Display } from "next/font/google";
import CartContext from "@/src/context/cartContext";

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
        <CartContext>{children}</CartContext>
      </body>
    </html>
  );
}
