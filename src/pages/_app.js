import "@/styles/globals.css";
import { Source_Sans_Pro } from "next/font/google";

const source_Sans_Pro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-Source_Sans_Pro",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${source_Sans_Pro.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
