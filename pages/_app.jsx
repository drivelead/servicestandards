import localFont from "next/font/local";
import "../styles/globals.css";

const readexpro = localFont({
  src: "../lib/fonts/readexpro/readexpro.ttf",
  variable: "--font-readexpro",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${readexpro.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
